<script>
  import { Link } from "svelte-routing";
  import { compose, when, propOr, prop } from "ramda";
  import { Dialog } from "svelma";
  import { deletePerson } from "apiAdapter/persons";

  import { getPath, PERSON_URL } from "constants/routes";

  export let persons = [];
  export let loading = false;
  export let getData;

  const deletePersonFromList = async (id) => {
    await deletePerson(id);
    await getData();
  };

  function deleteConfirm(person) {
    return Dialog.confirm({
      message: `Are u sure to delete ${propOr("N/A", "firstName", person)}?`,
      title: "Delete Person",
      type: "is-danger",
      icon: "times-circle",
    }).then(when((v) => v, () => deletePersonFromList(prop("_id", person))));
  }
</script>

<table class="table is-fullwidth">
  <thead>
    <tr>
      <th class="header_cell" />
      <th class="header_cell">First Name</th>
      <th class="header_cell">Last Name</th>
      <th class="header_cell" />
    </tr>
  </thead>
  <tbody>
    {#each persons as person, i (person._id)}
      <tr>
        <!-- <td><figure class="image"><img class="is-rounded" src="{user.picture.thumbnail}" alt=""></figure></td> -->
        <td>{propOr('N/A', 'image', person)}</td>
        <td>{propOr('N/A', 'firstName', person)}</td>
        <td>{propOr('N/A', 'lastName', person)}</td>
        <td style="text-align: right;">
          <Link to={getPath(PERSON_URL, { personId: prop('_id', person) })}>
            <span class="icon">
              <i class="fas fa-edit has-text-link " />
            </span>
          </Link>

          <span class="icon" on:click={() => deleteConfirm(person)} style="cursor: pointer;">
            <i class="fas fa-trash has-text-danger " />
          </span>

        </td>
      </tr>
    {:else}
      {#if !loading}
        <tr>
          <td colspan="5">
            <section class="section">
              <div class="content has-text-grey has-text-centered">
                <p>
                  <i class="far fa-3x fa-frown" />
                </p>
                <p>No data</p>
              </div>
            </section>
          </td>
        </tr>
      {/if}
    {/each}
  </tbody>
</table>

<style>
  .header_cell {
    position: sticky;
    top: 0;
    background-color: #fff;
  }
</style>

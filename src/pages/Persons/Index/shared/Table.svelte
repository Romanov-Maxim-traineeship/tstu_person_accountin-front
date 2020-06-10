<script>
  import { Link } from "svelte-routing";
  import { propOr, prop } from "ramda";

  import { getPath, PERSON_URL } from "constants/routes";

  export let persons = [];
  export let loading = false;
</script>

<table class="table is-fullwidth">
  <thead>
    <tr>
      <th />
      <th>First Name</th>
      <th>Last Name</th>
      <th />
    </tr>
  </thead>
  <tbody>
    {#each persons as person}
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

          <span class="icon">
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

<script>
  import { propOr, or } from "ramda";

  export let persons = [];
  export let loading = false;
</script>

<table class="table is-fullwidth">
  <thead>
    <tr>
      <th />
      <th>First Name</th>
      <th>Last Name</th>
    </tr>
  </thead>
  <tbody>
    {#each persons as person}
      <tr>
        <!-- <td><figure class="image"><img class="is-rounded" src="{user.picture.thumbnail}" alt=""></figure></td> -->
        <td>{propOr('N/A', 'image', person)}</td>
        <td>{propOr('N/A', 'first_name', person)}</td>
        <td>{propOr('N/A', 'last_name', person)}</td>
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

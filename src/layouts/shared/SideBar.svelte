<script>
  import { link } from "svelte-routing";
  import Link from "components/Link.svelte";

  let y;
  let isSticky = true;
  $: isSticky = y >= 770;
</script>

<svelte:window bind:innerWidth={y} />

<aside class="column is-3 mr-5">
  <nav class="menu" class:isSticky>
    <p class="is-size-6 menu-label">Administration</p>
    <ul class="is-size-6 menu-list">
      <li>
        <a href="/persons" class="is-size-6" use:link>Manage Persons</a>
        <ul>
          <li>
            <Link to="/persons" let:isActive isUniq>
              <a href="/persons" class="is-size-6 {isActive && 'is-active'}" use:link>Persons list</a>
            </Link>
          </li>
          <li>
            <Link to="/persons/new" let:isActive isUniq>
              <a href="/persons/new" class="is-size-6 {isActive && 'is-active'}" use:link>Add new</a>
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/auth" let:isActive>
          <a href="/auth" class="is-size-6 {isActive && 'is-active'}" use:link>Authorization</a>
        </Link>
      </li>
    </ul>
  </nav>
</aside>

<style>
  .isSticky {
    position: sticky;
    top: 50px;
  }
</style>

<script>
  import { link } from "svelte-routing";
  import { slide } from "svelte/transition";
  import Link from "components/Link.svelte";

  let isOpen = false;
  // import tstuLogo from '../../assets/tstu_logo.svg'

  const toogle = () => (isOpen = !isOpen);
</script>

<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img
        src="https://lh3.googleusercontent.com/proxy/0V_f2nWcDiU8GAURWNKsTurshr-aBgtXeLrH855uuVd9-mRnVyD2wgbjfvZq-B57U-5RERi6Eacj1xnA48n5WFMfYgW3hjEDqz4HBwGlwmzf"
        height="28" />
    </a>

    <Link to="/" let:isActive>
      <a class="navbar-item {isActive && 'is-active'}" use:link>Home</a>
    </Link>

    <Link to="/documentation" let:isActive>
      <a class="navbar-item {isActive && 'is-active'}" use:link>Documentation</a>
    </Link>

    <a
      on:click={toogle}
      role="button"
      class="navbar-burger burger"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasicExample">
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
  </div>

  {#if isOpen}
    <div id="navbarBasicExample" class="navbar-menu {isOpen && 'is-active'}" transition:slide|local>
      <div class="navbar-start">

        <Link to="/" let:isActive>
          <a class="navbar-item {isActive && 'is-active'}">Home</a>
        </Link>

        <Link to="/documentation" let:isActive>
          <a class="navbar-item {isActive && 'is-active'}">Documentation</a>
        </Link>

        <!-- <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">More</a>

        <div class="navbar-dropdown">
          <a class="navbar-item">About</a>
          <a class="navbar-item">Jobs</a>
          <a class="navbar-item">Contact</a>
          <hr class="navbar-divider" />
          <a class="navbar-item">Report an issue</a>
        </div>
      </div> -->
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">Log in</a>
          </div>
        </div>
      </div>
    </div>
  {/if}
</nav>

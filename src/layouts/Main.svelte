<script>
  import SideBar from "./shared/SideBar.svelte";
  import Navbar from "./shared/Navbar.svelte";
</script>

<Navbar />

<div class="section">
  <div class="columns">
    <SideBar />

    <main class="column">
      <!-- <Header /> -->
      <slot name="header" />

      <div class="columns">
        <div class="column">
          <slot />
        </div>
      </div>
    </main>
  </div>
</div>

<style>
  .content {
    width: 1100px;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .sidebar-wraaper {
    min-width: 240px;
  }
</style>

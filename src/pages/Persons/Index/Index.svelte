<script>
  import { onMount } from "svelte";
  import { link } from "svelte-routing";

  import { pushSnackbar } from "utils/common";
  import { getPersons } from "apiAdapter/persons";

  import Header from "components/Header";
  import Loader from "components/Loader.svelte";

  import Table from "./shared/Table.svelte";
  import ExportMenu from "./shared/ExportMenu.svelte";

  let persons = [];
  let loading = false;

  const getData = async () => {
    try {
      loading = true;
      persons = await getPersons();
    } catch (error) {
      pushSnackbar({
        type: "danger",
        actionText: "retry",
        message: "Failed fetch data",
        onAction: getData,
      });
    } finally {
      loading = false;
    }
  };

  onMount(async () => {
    getData();
  });
</script>

<Header title="Persons">
  <div slot="extra">
    <div>
      <div class="buttons">
        <a class="button is-link" href="/persons/new" use:link>Add New</a>
        <ExportMenu />
      </div>
    </div>
  </div>
</Header>

<div class="mt-5">
  {#if loading}
    <div class="loader_wrapper">
      <Loader />
    </div>
  {:else}
    <Table {persons} {loading} {getData} />
  {/if}
</div>

<style>
  .loader_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 50vh;
  }
</style>

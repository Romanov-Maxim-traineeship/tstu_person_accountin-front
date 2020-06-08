<script>
  import { onMount } from "svelte";
  import { link } from "svelte-routing";

  import { pushSnackbar } from "utils/common";
  import { getPersons } from "apiAdapter/persons";

  import Header from "components/Header";
  import DropDown from "components/DropDown";

  import Table from "./shared/Table.svelte";

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
        <DropDown />
      </div>
    </div>
  </div>
</Header>

<div class="mt-5">
  <Table {persons} {loading} />
</div>

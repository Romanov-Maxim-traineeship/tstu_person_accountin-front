<script>
  import { onMount } from "svelte";
  import { Button } from "svelma";

  import { pushSnackbar } from "utils/common";
  import { getPersons } from "apiAdapter/persons";

  import Header from "components/Header";

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

<Header />

<div>
  <Table {persons} {loading} />
</div>

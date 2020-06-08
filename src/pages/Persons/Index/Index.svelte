<script>
  import { onMount } from "svelte";
  import { getPersons } from "apiAdapter/persons";

  let persons = [];

  onMount(async () => {
    persons = await getPersons();
  });
</script>

<div>Persons page {persons.length}</div>

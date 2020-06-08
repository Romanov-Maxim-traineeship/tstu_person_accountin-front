<script>
  import { onMount } from "svelte";
  import { getPerson } from "apiAdapter/persons";

  export let personId;
  let person = {};

  onMount(async () => {
    person = await getPerson(personId);
  });
</script>

<div>{person.last_name}</div>

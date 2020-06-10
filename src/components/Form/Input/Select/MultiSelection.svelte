<script>
  import { createEventDispatcher } from "svelte";
  import { propOr } from "ramda";

  import Chip from "components/Chip/Chip.svelte";

  export let selectedValue = [];
  export let activeSelectedValue = undefined;
  export let isDisabled = false;
  export let getSelectionLabel = undefined;

  const dispatch = createEventDispatcher();

  function handleClear(i, event) {
    event.stopPropagation();
    dispatch("multiItemClear", { i });
  }
</script>

{#each selectedValue as value, i}
  <Chip
    title={getSelectionLabel(value)}
    isActive={activeSelectedValue === i}
    onRemove={(event) => handleClear(i, event)}
    isDisabled={isDisabled || propOr(false, 'isMultiSelectionDisabled', value)} />
{/each}

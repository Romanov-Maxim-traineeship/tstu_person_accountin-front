<script>
  import { map, prop } from "ramda";
  import Select from "svelte-select/Select.js";

  import MultiSelection from "./Select/MultiSelection.svelte";

  export let error;
  export let isDisabled = false;
  export let isLoading = false;
  export let isMulti = false;
  export let loadOptions;
  export let optionLabel = "label";
  export let options = [];
  export let optionValue = "value";
  export let placeholder = "Please Select…";
  export let selectedValue = undefined;
  export let value = undefined;
  export let isClearable = true;
  export let isSearchable = true;
  export let onChange = undefined;
  export let onClear = undefined;
  export let listOpen = false;

  const getOptionLabel = (option) => option[optionLabel];
  const getSelectionLabel = (option) => option[optionLabel];

  $: {
    value = selectedValue
      ? isMulti
        ? map(prop([optionValue]), selectedValue)
        : selectedValue[optionValue]
      : isMulti
      ? []
      : "";
  }
</script>

<div class="select" class:error>
  <Select
    on:select={onChange}
    on:clear={onClear}
    bind:selectedValue
    hideEmptyState={loadOptions ? true : false}
    isWaiting={isLoading}
    items={options}
    optionIdentifier={optionValue}
    {getOptionLabel}
    {getSelectionLabel}
    {isDisabled}
    {listOpen}
    {isMulti}
    {loadOptions}
    {MultiSelection}
    {isClearable}
    {isSearchable}
    {placeholder} />
</div>

<style>
  .select {
    display: block;
  }
</style>

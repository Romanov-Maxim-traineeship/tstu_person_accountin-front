<script>
  import { map, prop } from "ramda";
  import Select from "svelte-select";

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
    --border: 1px solid var(--input-secondary-lighten);
    --borderRadius: 0.5rem;
    --borderHoverColor: var(--input-accent);
    --borderFocusColor: var(--input-accent);
    --placeholderColor: var(--input-secondary);
    --spinnerColor: var(--input-accent);
    --borderRadius: 5px;
  }

  .error {
    --border: 1px solid var(--brand-danger);
    --borderHoverColor: var(--brand-danger);
    --borderFocusColor: var(--brand-danger);
  }
</style>

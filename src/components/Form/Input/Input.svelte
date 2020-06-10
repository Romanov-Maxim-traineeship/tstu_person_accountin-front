<script>
  // FIXME. Separate to independents components
  import Input from "svelma/src/components/Input.svelte";
  import Field from "svelma/src/components/Field.svelte";

  import { pipe, when, isEmpty, path, values } from "ramda";
  import Checkbox from "./Checkbox.svelte";
  import CheckboxGroup from "./CheckboxGroup.svelte";
  import Select from "./Select.svelte";
  import Radio from "./Radio.svelte";
  // import InputMask from "./InputMask.svelte";

  export let disabled = false;
  export let errors = undefined;
  export let id = undefined;
  export let isLoading = false;
  export let isClearable = undefined;
  export let isMulti = false;
  export let label = undefined;
  export let loadOptions = undefined;
  export let mask = undefined;
  export let maskOptions = undefined;
  export let name = undefined;
  export let noMargin = false;
  export let onChange = undefined;
  export let options = [];
  export let optionLabel = undefined;
  export let optionValue = undefined;
  export let placeholder = undefined;
  export let rows = 4;
  export let type = "text";
  export let value = undefined;
  export let selectedValue = undefined;
  export let defaultValue = undefined;

  export { class_name as class };
  let class_name = "";

  let error;

  id = id || name;

  $: {
    errors = errors && name && path(name.split("."), errors.source);
    if (errors) {
      error = values(errors)[0];
    }
  }

  // fixme: if value changed need to reset error
  $: {
    if (value) {
      error = null;
    }
  }
</script>

<div class="form__group" class:noMargin>
  {#if label && type !== 'checkbox' && type !== 'file'}
    <label for={name} class="form__label" class:form__label-error={error}>{label}</label>
  {/if}

  {#if type === 'text'}
    <Input bind:value on:change={onChange} {id} {disabled} {name} {placeholder} />
  {/if}

  {#if type === 'number'}
    <Input bind:value on:change={onChange} {id} {disabled} {name} type="number" {placeholder} />
  {/if}

  {#if type === 'email'}
    <Input bind:value on:change={onChange} type="email" {id} {disabled} {name} {placeholder} />
  {/if}

  <!-- {#if type === 'mask'}
    <InputMask
      bind:value
      class="form__input {class_name}
      {error && 'form__input-error'}"
      options={maskOptions}
      {disabled}
      {id}
      {mask}
      {name} />
  {/if}

  {#if type === 'date'}
      <InputMask
        bind:value
        options={maskOptions}
        mask="date"
        forceUpdate
        class="form__input {class_name}
        {error && 'form__input-error'}"
        {disabled}
        {id}
        {name} />
  {/if} -->

  {#if type === 'password'}
    <input
      bind:value
      class="form__input {class_name}
      {error && 'form__input-error'}"
      type="password"
      on:change={onChange}
      {id}
      {disabled}
      {name}
      {placeholder} />
  {/if}

  {#if type === 'textarea'}
    <textarea
      bind:value
      class="form__input form__textarea {class_name}
      {error && 'form__input-error'}"
      on:change={onChange}
      {id}
      {disabled}
      {name}
      {placeholder}
      {rows} />
  {/if}

  {#if type === 'select'}
    <Select
      bind:value
      {onChange}
      isDisabled={disabled}
      {isClearable}
      {optionLabel}
      {optionValue}
      {error}
      {isLoading}
      {isMulti}
      {loadOptions}
      {options}
      {placeholder}
      selectedValue={pipe(when(isEmpty, () => null))(selectedValue)} />
  {/if}

  {#if type === 'radio'}
    <Radio {defaultValue} bind:value {error} {onChange} {options} />
  {/if}

  {#if type === 'checkbox'}
    <Checkbox bind:value {error} {label} {disabled} {onChange} {name} />
  {/if}

  {#if type === 'checkboxGroup'}
    <CheckboxGroup bind:value {error} {onChange} {options} />
  {/if}

  {#if error}
    <span class="form__error">{error}</span>
  {/if}
</div>

<style>
  :global(.form__group) {
    margin: 0 0 1.4rem;
    text-align: left;
  }
</style>

<script>
  export let options = [{}];
  export let defaultValue = undefined;
  export let value = defaultValue;
  export let onChange = undefined;
  // $: value = selectedValue && selectedValue.value;
</script>

{#each options as option}
  <div>
    <label>
      <input
        type="radio"
        bind:group={value}
        on:change={onChange}
        value={option.value !== undefined ? option.value : option} />
      <span>{option.label || option}</span>
    </label>
  </div>
{/each}

<style>
  label {
    display: flex;
    cursor: pointer;
    width: auto;
    align-items: center;
    margin: 0 0 5px;
  }

  span {
    margin-left: 5px;
  }
</style>

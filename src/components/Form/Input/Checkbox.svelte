<script>
  export let disabled = false;
  export let label;
  export let name = false;
  export let value = undefined;
  export let onChange = undefined;
  // export let error = undefined;
</script>

<div>
  <label>
    <input type="checkbox" bind:checked={value} {disabled} {name} on:change={onChange} />
    <span>{label}</span>
  </label>
</div>

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

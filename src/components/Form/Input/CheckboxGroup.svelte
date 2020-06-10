<script>
  export let options = [];
  export let value = [];
  export let onChange = undefined;
</script>

{#each options as option, i}
  <div>
    <label>
      <input type="checkbox" bind:group={value} value={option.value !== undefined ? option.value : option} on:change={onChange} />
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

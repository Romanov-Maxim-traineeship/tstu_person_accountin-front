<script>
  export let isActive = false;
</script>

<div on:click class:isActive>
  <slot />
</div>

<style>
  div {
    padding: 1rem 1.5rem;
    cursor: pointer;
    border-top: 1px solid var(--input-secondary-lighten);
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  div:first-child {
    border-top: none;
  }

  div:hover {
    background: rgba(225, 245, 254, 0.5);
  }

  .isActive {
    background: var(--brand-primary);
    color: #fff;
  }

  .isActive:hover {
    background: var(--brand-primary);
    cursor: not-allowed;
  }
</style>

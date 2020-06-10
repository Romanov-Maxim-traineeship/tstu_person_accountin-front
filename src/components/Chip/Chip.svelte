<script>
  export let isActive = false;
  export let isDisabled = false;
  export let title;
  export let onRemove;
</script>

<div class="chip {isActive ? 'active' : ''} {isDisabled ? 'disabled' : ''}">
  {@html title}

  {#if !isDisabled}
    <div class="chip__clear" on:click={onRemove}>
      <svg width="100%" height="100%" viewBox="-2 -2 50 50" focusable="false" role="presentation">
        <path
          d="M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124
          l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z" />
      </svg>
    </div>
  {/if}
</div>

<style>
  .chip {
    position: relative;
    display: flex;
    align-items: center;
    white-space: nowrap;
    padding: 2px 32px 2px 12px;
    margin: 5px 5px 5px 0;
    min-height: 30px;
    list-style: none;
    font-size: 1.4rem;
    line-height: 1.4rem;
    background: #ebedef;
    border-radius: 16px;
    border: 1px solid #d9d9d9;
  }

  .chip__clear {
    position: absolute;
    right: 8px;
    top: 0;
    transform: translate(0, 35%);
    cursor: pointer;
    font-size: 18px;
    line-height: 1;
    opacity: 0.45;
    cursor: pointer;
    border-radius: 50%;
    background: #52616f;
    width: 16px;
    height: 16px;
    text-align: center;
    fill: #ebedef;
  }
  .chip__clear:hover {
    opacity: 0.8;
  }

  .disabled {
    padding-right: 12px;
  }
</style>

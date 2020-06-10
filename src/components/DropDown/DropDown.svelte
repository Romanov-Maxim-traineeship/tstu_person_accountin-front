<script>
  import { createEventDispatcher } from "svelte";
  import Button from "svelma/src/components/Button.svelte";
  import * as transitions from "svelte/transition";
  import ClickOutside from "svelte-click-outside";
  const dispatch = createEventDispatcher();

  export let isOpen;
  export let name;
  export let left;
  export let isLoading;
  export let maxHeight = "25rem";
  export let animation = "slide";

  let triggerEl;

  const toggle = () => dispatch("change", !isOpen);
  const close = () => dispatch("change", false);
  const animationType = transitions[animation];
</script>

<ClickOutside on:clickoutside={close} exclude={[triggerEl]} />
<div class="dropdown" class:isOpen>
  <div class="dropdown__trigger">
    <Button
      loading={isLoading}
      bind:this={triggerEl}
      on:click={(e) => {
        e.stopPropagation();
        toggle();
      }}>
      <div class="button_container" class:isOpen>
        <span class="button_name">{name}</span>
        <span class="button_indicator">
          <i class="fas fa-chevron-down" />
        </span>
      </div>
    </Button>
  </div>
  {#if isOpen}
    <div class="dropdown__items" style="max-height: {maxHeight}" class:left transition:animationType|local>
      <slot />
    </div>
  {/if}
</div>
<!-- </ClickOutside> -->

<style>
  .dropdown {
    position: relative;
  }

  .dropdown__trigger {
    font-size: var(--font_size-base);
    width: 100%;
    display: flex;
  }

  .dropdown__items {
    min-width: 100%;
    position: absolute;
    top: 85%;
    background-color: #fff;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
    border-radius: 0.4rem;
    overflow-x: scroll;
    z-index: 10;
    right: -1px;
  }

  .left {
    left: -1px;
    right: auto;
  }

  .button_container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .button_name {
    margin-right: 10px;
  }

  .button_indicator {
    margin-bottom: -1px;
    transition: transform 0.5s;
  }

  .isOpen .button_indicator {
    transform: rotate(-180deg);
  }
</style>

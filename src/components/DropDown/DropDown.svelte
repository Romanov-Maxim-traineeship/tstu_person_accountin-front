<script>
  import { Icon } from "svelma";

  import { createEventDispatcher } from "svelte";
  import * as transitions from "svelte/transition";
  import ClickOutside from "svelte-click-outside";
  const dispatch = createEventDispatcher();

  export let isOpen;

  export let animation = "slide";

  const toggle = () => dispatch("change", !isOpen);
  const close = () => dispatch("change", false);

  const animationType = transitions[animation];
</script>

<ClickOutside on:clickoutside={close}>
  <div class="dropdown {isOpen && 'is-active'}">
    <div class="dropdown-trigger">
      <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" on:click={toggle}>
        <span>Dropdown button</span>
        <Icon pack="fab" size="is-large" icon="github" />
      </button>
    </div>
    {#if isOpen}
      <div class="dropdown-menu" id="dropdown-menu" role="menu" transition:animationType|local>
        <div class="dropdown-content">
          <a href="#" class="dropdown-item">Dropdown item</a>
          <a class="dropdown-item">Other dropdown item</a>
          <a href="#" class="dropdown-item is-active">Active dropdown item</a>
          <a href="#" class="dropdown-item">Other dropdown item</a>
          <hr class="dropdown-divider" />
          <a href="#" class="dropdown-item">With a divider</a>
        </div>
      </div>
    {/if}
  </div>
</ClickOutside>

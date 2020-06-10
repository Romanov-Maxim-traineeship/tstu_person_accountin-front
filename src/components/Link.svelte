<script>
  import { Link } from "svelte-routing";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let to = "";
  export let isUniq = false;
  let isActive = false;

  function getProps({ location, href, isPartiallyCurrent, isCurrent }) {
    isActive = href === "/" ? isCurrent : isPartiallyCurrent || isCurrent;

    if (isUniq) {
      isActive = isCurrent && isPartiallyCurrent && isCurrent;
    }

    dispatch("change", isActive);

    if (isActive) {
      return { class: "active" };
    }
    return {};
  }
</script>

<div>
  <Link {to} {getProps}>
    <slot {isActive} />
  </Link>
</div>

<style>
  :global(div a) {
    text-decoration: none;
  }
</style>

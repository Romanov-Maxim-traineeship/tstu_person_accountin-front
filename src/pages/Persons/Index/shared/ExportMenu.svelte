<script>
  import DropDown, { DropDownItem } from "components/DropDown";

  let isOpen = false;

  const options = [
    {
      label: "PDF",
      action: () => console.log("pdf"),
    },
    {
      label: "Excel",
      action: () => console.log("excel"),
    },
  ];
</script>

<DropDown {isOpen} on:change={({ detail }) => (isOpen = detail)} name="Export">
  {#each options as { action, label }, i}
    <div class="dropdown_item">
      <DropDownItem on:click={action}>{label}</DropDownItem>
    </div>
  {/each}
</DropDown>

<style>
  .dropdown_item {
    min-width: 11rem;
  }
</style>

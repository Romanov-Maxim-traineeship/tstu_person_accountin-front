<script>
  import DropDown, { DropDownItem } from "components/DropDown";
  import { getExport } from "apiAdapter/persons";
  let isOpen = false;
  let isLoading = false;

  const download = async (type) => {
    try {
      isLoading = true;
      await getExport(type);
      isLoading = false;
    } catch (error) {
      isLoading = false;
    }
  };

  const options = [
    {
      label: "PDF",
      action: () => download("pdf"),
    },
    {
      label: "Excel",
      action: () => download("excel"),
    },
  ];
</script>

<DropDown {isOpen} on:change={({ detail }) => (isOpen = detail)} name="Export" {isLoading}>
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

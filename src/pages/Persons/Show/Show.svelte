<script>
  import { dissoc } from "ramda";
  import { onMount } from "svelte";
  import { navigate, link } from "svelte-routing";
  import { getPerson, updatePerson } from "apiAdapter/persons";
  import { pushToast } from "utils/common";
  import Loader from "components/Loader.svelte";

  import Header from "components/Header";

  import { PERSONS_URL } from "constants/routes";
  import Form from "../shared/Form.svelte";

  export let personId;
  let person = {};
  let isLoading = false;

  onMount(async () => {
    try {
      isLoading = true;
      person = await getPerson(personId);
    } catch (error) {
      console.log("error :>> ", error);
    } finally {
      isLoading = false;
    }
  });

  const submitHandler = async (d) => {
    try {
      await updatePerson(personId, dissoc("_id", d));
      pushToast("success", `Person success updated`);
      navigate(PERSONS_URL);
    } catch (error) {
      console.log("error :>> ", error);
      pushToast("danger", `Something wen wrong`);
    }
  };
</script>

<Header title="Edit Person">
  <div slot="extra">
    <div>
      <div class="buttons">
        <a class="button is-light" href={PERSONS_URL} use:link>Back To List</a>
      </div>
    </div>
  </div>
</Header>

<div>
  {#if isLoading}
    <div class="loader_wrapper">
      <Loader />
    </div>
  {:else}
    <Form onSubmit={submitHandler} {person} />
  {/if}
</div>

<style>
  .loader_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 50vh;
  }
</style>

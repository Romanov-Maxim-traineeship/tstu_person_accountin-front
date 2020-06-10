<script>
  import { dissoc } from "ramda";
  import { onMount } from "svelte";
  import { navigate } from "svelte-routing";
  import { getPerson, updatePerson } from "apiAdapter/persons";
  import { pushToast } from "utils/common";

  import Header from "components/Header";

  import { PERSONS_URL } from "constants/routes";
  import Form from "../shared/Form.svelte";

  export let personId;
  let person = {};

  onMount(async () => {
    person = await getPerson(personId);
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
  <Form onSubmit={submitHandler} {person} />
</div>

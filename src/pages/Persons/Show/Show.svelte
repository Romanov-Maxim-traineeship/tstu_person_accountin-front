<script>
  import { dissoc } from "ramda";
  import { onMount } from "svelte";
  import { navigate } from "svelte-routing";
  import { getPerson, updatePerson } from "apiAdapter/persons";
  import { pushToast } from "utils/common";

  import { PERSONS_URL } from "constants/routes";
  import Form from "../shared/Form.svelte";

  export let personId;
  let person = {};

  onMount(async () => {
    person = await getPerson(personId);
  });

  const submitHandler = async (d) => {
    try {
      const { firstName } = await updatePerson(personId, dissoc("_id", d));
      pushToast("success", `${firstName} success updated`);
      navigate(PERSONS_URL);
    } catch (error) {
      console.log("error :>> ", error);
      pushToast("danger", `Something wen wrong`);
    }
  };
</script>

<div>
  <Form onSubmit={submitHandler} {person} />
</div>

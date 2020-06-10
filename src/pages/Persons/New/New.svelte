<script>
  import { navigate } from "svelte-routing";
  import { createPerson } from "apiAdapter/persons";
  import { pushToast } from "utils/common";
  import { PERSONS_URL } from "constants/routes";

  import Form from "../shared/Form.svelte";

  const submitHandler = async (person) => {
    try {
      const { firstName } = await createPerson(person);
      pushToast("success", `${firstName} success added`);
      navigate(PERSONS_URL);
    } catch (error) {
      pushToast("danger", `Something wen wrong`);
    }
  };
</script>

<div>
  <Form onSubmit={submitHandler} />
</div>

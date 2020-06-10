<script>
  import { link, navigate } from "svelte-routing";
  import { createPerson } from "apiAdapter/persons";
  import { pushToast } from "utils/common";
  import { PERSONS_URL } from "constants/routes";
  import Header from "components/Header";

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

<Header title="Create New Person">
  <div slot="extra">
    <div>
      <div class="buttons">
        <a class="button is-light" href={PERSONS_URL} use:link>Back To List</a>
      </div>
    </div>
  </div>
</Header>

<div>
  <Form onSubmit={submitHandler} />
</div>

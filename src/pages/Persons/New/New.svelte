<script>
  import Input from "components/Form/Input";
  import Button from "svelma/src/components/Button.svelte";
  // import Input from "svelma/src/components/Input.svelte";

  export let person = {};

  let gendersOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  const submitHandler = () => console.log(person);
</script>

<form on:submit|preventDefault={submitHandler}>
  <div class="row">
    <Input bind:value={person.firstName} name="firstName" label="First name" />

    <Input bind:value={person.lastName} name="lastName" label="Last name" />
  </div>

  <Input
    bind:value={person.numberAndSeriesOfPassport}
    name="numberAndSeriesOfPassport"
    type="number"
    label="Number and Series of Passport" />

  <Input
    label="Gender"
    name="gender"
    bind:value={person.gender}
    type="select"
    options={gendersOptions}
    placeholder="select a gender" />

  <Button type="is-success" nativeType="submit">Submit</Button>
</form>

<style>
  .row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
    grid-gap: 2.5rem;
    /* margin-bottom: 1rem; */
  }
</style>

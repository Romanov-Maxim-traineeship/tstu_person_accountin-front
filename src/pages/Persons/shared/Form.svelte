<script>
  import { find, propEq } from "ramda";
  import Input from "components/Form/Input";
  import Button from "svelma/src/components/Button.svelte";

  export let person = {};
  export let onSubmit;

  let gendersOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];
</script>

<form on:submit|preventDefault={() => onSubmit(person)}>
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
    placeholder="select a gender"
    selectedValue={find(propEq('value', person.gender), gendersOptions)} />

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

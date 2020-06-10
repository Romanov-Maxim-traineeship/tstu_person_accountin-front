<script>
  import "bulma/css/bulma.css";

  import { Router, Route } from "svelte-routing";

  import MainLayout from "./layouts/Main.svelte";

  import { ROOT_URL, PERSONS_URL, PERSON_URL, PERSON_NEW_URL } from "constants/routes";
  import PersonShow from "./pages/Persons/Show";
  import NewPerson from "./pages/Persons/New";
  import Persons from "./pages/Persons/Index";

  export let url = "";
</script>

<svelte:head>
  <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js">

  </script>
</svelte:head>

<Router {url}>
  <MainLayout>

    <Route path={PERSON_NEW_URL} component={NewPerson} />

    <Route path={PERSON_URL} component={PersonShow} />

    <Route path={PERSONS_URL} component={Persons} />

    <Route path={ROOT_URL} component={Persons} />
  </MainLayout>
</Router>

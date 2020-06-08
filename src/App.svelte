<script context="module">
  import "bulma/css/bulma.css";

  import { register } from "svelte-loadable";
  import MainLayout from "./layouts/Main.svelte";

  import { ROOT_URL, PERSONS_URL, PERSON_URL } from "constants/routes";

  // Loaders must be registered outside of the render tree.
  const PersonePageLoader = register({
    loader: () => import("./pages/Persons/Show"),
    resolve: () => require.resolve("./pages/Persons/Show"),
  });

  const PersonsPageLoader = register({
    loader: () => import("./pages/Persons/Index"),
    resolve: () => require.resolve("./pages/Persons/Index"),
  });
</script>

<script>
  import { Router, Route } from "svelte-routing";
  import Loadable from "svelte-loadable";

  export let url = "";
</script>

<MainLayout>
  <Router {url}>
    <Route path={PERSON_URL} let:params>
      <Loadable loader={PersonePageLoader} personId={params.personId} />
    </Route>

    <Route path={PERSONS_URL}>
      <Loadable loader={PersonsPageLoader} />
    </Route>

    <Route path={ROOT_URL}>
      <Loadable loader={PersonsPageLoader} />
    </Route>
  </Router>
</MainLayout>

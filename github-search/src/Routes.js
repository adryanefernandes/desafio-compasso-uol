import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";

function Routes() {
  return <BrowserRouter>
    <Switch>
      <Route exact path = "/">
        <HomePage />
      </Route>

      <Route exact path = "/search">
        <UsersListPage />
      </Route>

      <Route>
        {/* Página de erro */}
      </Route>

    </Switch>
  </BrowserRouter>
}

export default Routes
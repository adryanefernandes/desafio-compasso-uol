import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SearchResultPage from "../pages/SearchResultPage";

function Router() {
  return <BrowserRouter>
    <Switch>
      <Route exact path = "/">
        <HomePage />
      </Route>

      <Route exact path = "/search/:user">
        <SearchResultPage />
      </Route>

      <Route>
        {/* Página de erro */}
      </Route>

    </Switch>
  </BrowserRouter>
}

export default Router
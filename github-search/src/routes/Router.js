import { BrowserRouter, Switch, Route } from "react-router-dom";
import DetailsUserPage from "../pages/DetailsUserPage";
import HomePage from "../pages/Home/HomePage";
import SearchResultPage from "../pages/SearchResultPage";

function Router() {
  return <BrowserRouter>
    <Switch>
      <Route exact path = "/">
        <HomePage />
      </Route>

      <Route exact path = "/user/search/:user">
        <SearchResultPage />
      </Route>

      <Route exact path = "/user/:user">
        <DetailsUserPage />
      </Route>

      <Route>
        {/* página de erro */}
      </Route>

    </Switch>
  </BrowserRouter>
}

export default Router
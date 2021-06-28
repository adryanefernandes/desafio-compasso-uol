import { BrowserRouter, Switch, Route } from "react-router-dom";
import DetailsUserPage from "../pages/DetailsUser/DetailsUserPage";
import HomePage from "../pages/Home/HomePage";
import SearchResultPage from "../pages/SearchResult/SearchResultPage";
import ErrorPage from "../pages/Error/ErrorPage";

function Router() {
  return <BrowserRouter>
    <Switch>
      <Route exact path = "/">
        <HomePage />
      </Route>

      <Route exact path = "/user/search/:user/:page">
        <SearchResultPage />
      </Route>

      <Route exact path = "/user/:user">
        <DetailsUserPage />
      </Route>

      <Route>
        <ErrorPage />
      </Route>

    </Switch>
  </BrowserRouter>
}

export default Router
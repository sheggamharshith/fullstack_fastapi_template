import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
// pages
import ErrorPage from "../Pages/error";
import LoginPage from "../Pages/login";

//routes 
import { PrivateRoute,PublicRoute } from "../routes"

//layout 
import AdminLayout from "./Layout/AdminLayout"

import { useUserState } from "../context/UserContext";

function App() {
  var { isAuthenticated } = useUserState();

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app/main"/>} />
        <Route
          exact
          path="/app"
          render={() => <Redirect to="/app/main" />}
        />
        <PrivateRoute
          path="/app"
          component={AdminLayout}
          isAuthenticated={isAuthenticated}
        />
        <PublicRoute
          path="/login"
          component={LoginPage}
          isAuthenticated={isAuthenticated}
        />
        <Route component={ErrorPage} />
      </Switch>
    </HashRouter>
  );
 
}

export default App;

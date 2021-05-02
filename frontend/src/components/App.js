import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
// pages
import ErrorPage from "../Pages/error";
import LoginPage from "../Pages/login";

//routes 
import { PrivateRoute,PublicRoute } from "../routes"

//layout 
import AdminLayout from "./Layout/DashboardLayout"

import { useUserState } from "../context/UserContext";

function App() {
  var { isAuthenticated } = useUserState();
  console.log(isAuthenticated);

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app/dashboard" />} />
        <Route
          exact
          path="/app"
          render={() => <Redirect to="/app/dashboard" />}
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

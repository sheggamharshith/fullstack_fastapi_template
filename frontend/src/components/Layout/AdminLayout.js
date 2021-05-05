import React from "react";
import { Route, Switch } from "react-router-dom";
import DBSingleTable from "../../Pages/AdminDashBoard/DataBaseSingleTable";

// Pages
import AdminDataBaseTablePage from "../../Pages/AdminDashBoard/DataBaseTablePage";
import AdminMainPage from "../../Pages/AdminDashBoard/main";
import ErrorPage from "../../Pages/error";

const AdminLayout = () => {
  return (
    <div>
      <Switch>
        <Route path="/app/databasetables" component={AdminDataBaseTablePage} />
        <Route path="/app/main" component={AdminMainPage} />
        <Route path="/app/table/:id" component={DBSingleTable} />
        <Route component={ErrorPage}/>
      </Switch>
    </div>
  );
};

export default AdminLayout;

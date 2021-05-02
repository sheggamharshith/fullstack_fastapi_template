import React from "react";
import { Route, Switch  } from "react-router-dom";

// Pages
import AdminMainPage from "../../Pages/AdminDashBoard/main";


// components 
import Header from "../Header";

const AdminLayout = () => {
  return (
    <div className="layoutmain">
        <Header/>
      <Switch>
        <Route path="/app/dashboard" component={AdminMainPage} />
      </Switch>
    </div>
  );
};


export default AdminLayout;
import React from "react";
import { Route, Switch  } from "react-router-dom";

// Pages
import AdminMainPage from "../../Pages/AdminDashBoard/main";


// components 
import Header from "../Header";

const AdminLayout = () => {
  return (
    <div className="flex flex-col h-screen w-full">
        <Header/>
      <Switch>
        <Route path="/app/dashboard" component={AdminMainPage} />
      </Switch>
    </div>
  );
};


export default AdminLayout;
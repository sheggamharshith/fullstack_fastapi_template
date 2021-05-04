import React from "react";
import { Route, Switch  } from "react-router-dom";

// Pages
import AdminMainPage from "../../Pages/AdminDashBoard/main";


// components 
import Header from "../Header";
import SideBar from "../sidebar";

const AdminLayout = () => {
  return (
    <div className="flex flex-col h-screen w-full r">
      <SideBar />

      <Header />
      <div className="flex justify-center items-center border h-full ">
        {" "}
        main page
      </div>

      {/* <Switch>
        <Route path="/app/dashboard" component={AdminMainPage} />
      </Switch> */}
    </div>
  );
};


export default AdminLayout;
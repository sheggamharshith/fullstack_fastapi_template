import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// context
import { UserProvider } from "./context/UserContext";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <>
    <React.StrictMode>
      <UserProvider>
        <App />
      </UserProvider>
    </React.StrictMode>
    <ToastContainer />
  </>,
  document.getElementById("root")
);

reportWebVitals();

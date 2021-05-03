import React from "react";
import axios from "../customAxios";
import qs from "qs";
import { toast } from "react-toastify";

var UserStateContext = React.createContext();
var UserDispatchContext = React.createContext();

function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, isAuthenticated: true };
    case "SIGN_OUT_SUCCESS":
      return { ...state, isAuthenticated: false };
    case "LOGIN_FAILURE":
      return { ...state, isAuthenticated: false };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function UserProvider({ children }) {
  var [state, dispatch] = React.useReducer(userReducer, {
    isAuthenticated: !!localStorage.getItem("id_token"),
  });

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

function useUserState() {
  var context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error("useUserState must be used within a UserProvider");
  }
  return context;
}

function useUserDispatch() {
  var context = React.useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error("useUserDispatch must be used within a UserProvider");
  }
  return context;
}

export {
  UserProvider,
  useUserState,
  useUserDispatch,
  loginUser,
  signOut,
  signOutWithoutDispatcher,
};

// ###########################################################

function loginUser(dispatch, login, password, history, setIsLoading, setError) {
  setIsLoading(true);
  const body = qs.stringify({
    username: `${login}`,
    password: `${password}`,
  });
  if (!!login && !!password) {
    axios
      .post("http://localhost:8000/api/v1/auth/access-token", body, {
        headers: {
          "content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      })
      .then((response) => {
        localStorage.setItem("id_token", response.data.access_token);
        localStorage.setItem("token_type", response.data.toke_type);
        setIsLoading(false);
        dispatch({ type: "LOGIN_SUCCESS" });
        history.push("/app/dashboard");
      })
      .catch((error) => {
        setError(`${error.response.data.detail}`);
        toast.error(`${error.response.data.detail}`);
        setIsLoading(false);
      });
  } else {
    // dispatch({ type: "LOGIN_FAILURE" });
    setError("please fill the form login and password");
    setIsLoading(false);
  }
}

function signOut(dispatch, history) {
  localStorage.removeItem("id_token");
  dispatch({ type: "SIGN_OUT_SUCCESS" });
  history.push("/login");
}

function signOutWithoutDispatcher() {
  localStorage.removeItem("id_token");
}

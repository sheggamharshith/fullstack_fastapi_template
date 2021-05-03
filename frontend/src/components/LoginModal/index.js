import React, { useState } from "react";
// dispatch
import { useHistory } from "react-router-dom";
import { useUserDispatch, loginUser } from "../../context/UserContext";
import Loader from "../Loader";

const login = (target, setIsLoading, setError, userDispatch, history) => {
  const username = target[0].value;
  const password = target[1].value;
  loginUser(userDispatch, username, password, history, setIsLoading, setError);
};

const LoginModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const history = useHistory();
  const userDispatch = useUserDispatch();



  return (
    <>
      <div
        className={
          isLoading
            ? "absolute flex w-full h-full items-center justify-center bg-gray-100  bg-opacity-30"
            : "hidden"
        }
      >
        <Loader />
      </div>
      <div className="bg-white max-w-screen-sm w-full  shadow-md border mx-2">
        <div className="py-8 px-8 rounded-xl">
          <h1 className="font-medium text-2xl mt-3 text-center">Login</h1>
          {error ? (
            <div
              className="bg-red-500 text-white pl-4 pr-8 py-3 rounded relative"
              role="alert"
            >
              <strong className="font-bold">{error}</strong>
            </div>
          ) : null}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              login(e.target, setIsLoading, setError, userDispatch, history);
            }}
            className="mt-6"
          >
            <div className="my-5 text-sm">
              <label className="block text-black">Username</label>
              <input
                type="text"
                id="username"
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="Username"
              />
            </div>
            <div className="my-5 text-sm">
              <label className="block text-black">Password</label>
              <input
                type="password"
                id="password"
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="Password"
              />
              <div className="flex justify-end mt-2 text-xs text-gray-600">
                <a href="../../pages/auth/forget_password.html hover:text-black">
                  Forget Password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="text-center text-white bg-pmaterial p-3  rounded-sm bg-opacity-75 hover:bg-opacity-100 w-full focus:outline-none hover:shadow-2xl "
            >
              Login
            </button>
          </form>

          <p className="mt-12 text-xs text-center font-light text-gray-400">
            {" "}
            Don't have an account?{" "}
            <a href="../auth/register.html" className="text-black font-medium">
              {" "}
              Create One{" "}
            </a>{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginModal;

import React, { useState } from "react";
// dispatch
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useUserDispatch, loginUser } from "../../context/UserContext";

const login = (target, setIsLoading, setError, userDispatch, history) => {
  const username = target[0].value;
  const password = target[1].value;
  console.log(username, password);
  loginUser(userDispatch, username, password, history, setIsLoading, setError);
};

const LoginModal = () => {
  var [isLoading, setIsLoading] = useState(false);
  var [error, setError] = useState(null);

  const history = useHistory();
  const userDispatch = useUserDispatch();

  if (isLoading) {
    console.log(isLoading);
    return <div>loading</div>;
  }

  if (error) {
    console.log(error);
    toast.error(error)
  }

  return (
    <div className="bg-white max-w-screen-sm w-full  shadow-md border mx-2">
      <div className="py-8 px-8 rounded-xl">
        <h1 className="font-medium text-2xl mt-3 text-center">Login</h1>
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
            className="block text-center text-white bg-pmaterial p-3  rounded-sm bg-opacity-75 hover:bg-opacity-100 w-full focus:outline-none transition transform  ease-in-out duration-100 hover:shadow-2xl "
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
  );
};

export default LoginModal;

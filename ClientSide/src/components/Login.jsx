import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { SetUser } from "../Store/AuthSlice.jsx";

function Login() {
  const dispatch = useDispatch();
  const [logindata, setlogindata] = useState({
    Email: "",
    Password: "",
  });
  //Manage backend Response on login
  const [errormessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      //From Validation
      if (!logindata.Email || !logindata.Password) {
        return setErrorMessage("please fill out all filds");
      }
      const Request = await axios.post(
        `${window.location.origin}/login/login`,
        logindata,
        { withCredentials: true }
      );
      setlogindata({
        Email: "",
        Password: "",
      });
      const response = Request.data;
      console.log(response);
      if (Request.status == 200) {
        dispatch(SetUser(response));
        setErrorMessage(response.message);
      }
      // when successful login then navigate to home page
      if (response.user.Role == "admin") {
        navigate("/admin");
      } else if (response.user.Role == "user") {
        navigate("/");
      }
    } catch (error) {
      console.log("hi sajid", error);
    }
  };

  return (
    <div className="container-fluid  mt-2 px-4 md:px-16 lg:px-24 space-x-2   ">
      <div className="border bg-blue-900 h-screen rounded flex items-center justify-center">
        <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg border ">
          <h2 className="text-2xl font-bold text-center text-gray-700">
            Login to Your Account
          </h2>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="text"
                id="Email"
                value={logindata.Email}
                onChange={(e) => {
                  setlogindata({
                    ...logindata, // Spread the previous state
                    [e.target.id]: e.target.value, // Update the specific field dynamically
                  });
                }}
                placeholder="Enter your email"
                className="w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="text"
                value={logindata.Password}
                id="Password"
                onChange={(e) => {
                  setlogindata({
                    ...logindata, // Spread the previous state
                    [e.target.id]: e.target.value, // Update the specific field dynamically
                  });
                }}
                placeholder="******"
                className="w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
              />
            </div>

            <button
              onClick={handleLogin}
              className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign In
            </button>
          </div>
          {errormessage ? <p>{errormessage}</p> : ""}
          <div className="text-sm text-center">
            <p>
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

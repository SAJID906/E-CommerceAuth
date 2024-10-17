import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [signupdata, setsignupdata] = useState({
    Name: "",
    Email: "",
    Password: "",
  });
  console.log(signupdata);
  const [SignupResponse, setSignupResponse] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    try {
      //Form Validation
      if (!signupdata.Name || !signupdata.Email || !signupdata.Password) {
        return setSignupResponse("please fill out All fildes");
      }
      const Response = await axios.post(
        `${window.location.origin}/signup`,
        signupdata
      );
      console.log("check Signup backend response", Response);

      //IF USER SignUp Successfully then navigate to Login Page
      if (Response.status == 201) {
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
      //Diplay Backend Response When SignUp call
      setSignupResponse(Response.data.message);
      setsignupdata({
        Name: "",
        Email: "",
        Password: "",
      });
    } catch (error) {
      // Show server error message
      if (error.response && error.response.status === 400) {
        setSignupResponse(error.response.data.message);
      }
    }
  };

  return (
    <div className="container-fluid  mt-2 px-4 md:px-16 lg:px-24 space-x-2 ">
      <div className="border bg-blue-900 h-screen rounded flex items-center justify-center">
        <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-center text-gray-700">
            Register Your Account
          </h2>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="Name"
                value={signupdata.Name}
                onChange={(e) => {
                  setsignupdata({
                    ...signupdata, // Spread the previous state
                    [e.target.id]: e.target.value, // Update the specific field dynamically
                  });
                }}
                placeholder="Enter your email"
                className="w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
              />
            </div>
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
                value={signupdata.Email}
                onChange={(e) => {
                  setsignupdata({
                    ...signupdata, // Spread the previous state
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
                value={signupdata.Password}
                id="Password"
                onChange={(e) => {
                  setsignupdata({
                    ...signupdata, // Spread the previous state
                    [e.target.id]: e.target.value, // Update the specific field dynamically
                  });
                }}
                placeholder="******"
                className="w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
              />
            </div>

            <button
              onClick={() => {
                handleSignup();
              }}
              className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign up
            </button>
          </div>
          {SignupResponse ? <p>{SignupResponse}</p> : ""}
          <div className="text-sm text-center">
            <p>
              Have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

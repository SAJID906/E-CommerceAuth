import React, { useEffect, useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

function Admin() {
  const [alluser, setalluser] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const GetUser = async () => {
      try {
        const Request = await axios.get(
          `${window.location.origin}/user/getuser`,
          {
            withCredentials: true,
          }
        );
        const Response = Request.data.user;
        console.log(Response);
        setalluser(Response);
      } catch (error) {
        if (error.status == 401) {
          navigate("/login");
        }
        console.log(
          "At Admin Page Error Checking",
          error.response.data.message
        );
      }
    };
    GetUser();
  }, [navigate]);
  //Delete User  FUNCTION
  const handleDelete = async (id) => {
    try {
      const logout = await axios.post(
        `${window.location.origin}/delte/delte/${id}`,
        {},

        { withCredentials: true }
      );
      // console.log("frontend ID logout", logout.data.message);
    } catch (error) {
      if (error.response) {
        console.log("Logout Error ", error.response.data);
      }
    }
  };
  return (
    <>
      <div className="  mt-2 px-4 md:px-16 lg:px-24 space-x-2 flex justify-center items-center">
        <div className="w-full   space-y-6 bg-white shadow-lg rounded-lg">
          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alluser.map((val, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 shadow-md rounded-md flex flex-col space-y-2"
              >
                <h1 className="text-lg font-semibold">{val.Name}</h1>
                <p className="text-gray-600">{val.Email}</p>
                <button
                  onClick={() => {
                    handleDelete(val._id);
                  }}
                  className="bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;

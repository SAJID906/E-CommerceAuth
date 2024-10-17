import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

function AdminLayout() {
  try {
    const navigate = useNavigate();
    const user = useSelector((state) => state.Auth.user.user);
    console.log("User Role:", user);
    useEffect(() => {
      if (!user || user.Role !== "admin") {
        navigate("/login");
      }
    }, [user]);
  } catch (error) {
    console.log(error);
  }
  return (
    <>
      <Outlet />
    </>
  );
}

export default AdminLayout;

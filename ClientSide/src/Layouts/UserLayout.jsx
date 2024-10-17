import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

function UserLayout() {
  const navigate = useNavigate();

  // Safely access user by checking if state.Auth.user exists
  const user = useSelector((state) => state?.Auth?.user?.user);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    
  }, [user, navigate]);

  return (
    <>
      <Outlet />
    </>
  );
}

export default UserLayout;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Admin from "./pages/Admin";
import Shop from "./pages/Shop";
import Cart from "./components/Cart";
import Filter from "./pages/Filter";
import AdminLayout from "./Layouts/AdminLayout";
import UserLayout from "./Layouts/UserLayout";
import PublicLayout from "./Layouts/PublicLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* Nested Route UserLayout access child by using Outlet */}
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="filter" element={<Filter />} />
            <Route path="shop" element={<Shop />} />
          </Route>

          <Route path="/" element={<PublicLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
          {/* This is AdminLayout */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Admin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

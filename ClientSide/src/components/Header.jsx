import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SearchData } from "../Store/Slices/ProductSlice";
import { LogOut } from "../Store/AuthSlice";
import axios from "axios";

function Header() {
  const Dispatch = useDispatch();
  const Navigate = useNavigate();
  const count = useSelector((state) => state.cart.products);
  //Auth User check
  const user = useSelector((state) => state?.Auth?.user?.user);
  // implment logout functionality
  const handleLogout = async () => {
    try {
      Dispatch(LogOut());
      console.log("hi logout");
      await axios.post(
        "http://localhost:5000/logout/logout",
        {},
        { withCredentials: true }
      );

      Navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // search functionality
  const [search, setsearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(SearchData(search));
    navigate("/filter");
  };

  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="container mx-auto  px-4 md:px-16 lg:px-24   py-4 flex justify-between items-center ">
          <div className="text-lg font-semibold">
            <Link>e-Shop</Link>
          </div>
          <div className=" relative mx-4 flex-1 ">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                onChange={(e) => {
                  setsearch(e.target.value);
                }}
                placeholder="Search items"
                className="border shadow-md w-full rounded py-2 px-4 "
              />
              <FaSearch className="absolute top-3 right-3 text-red-500"></FaSearch>
            </form>
          </div>
          <div className="flex items-center space-x-4 relative ">
            <Link to="/cart">
              <FaShoppingCart className="" />
              <span className="  absolute bottom-2  text-center text-white w-6 h-6 bg-red-600 rounded-full left-3 ">
                {count.length > 0 ? count.length : <>0</>}
              </span>
            </Link>
            {/* logout function */}
            {user ? (
              <button
                onClick={() => {
                  handleLogout();
                }}
              >
                Logout
              </button>
            ) : (
              <Link to="/signup">
                <button className="hidden md:block">Login|Register</button>
                <button className="block md:hidden">
                  <FaUser />
                </button>
              </Link>
            )}
          </div>
        </div>
        <ul className="flex justify-center items-center py-4 font-bold text-sm space-x-10">
          <li className="hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:underline">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="hover:underline">
            <div to="/contact">Contact</div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;

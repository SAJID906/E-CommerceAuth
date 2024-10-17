import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addtocart } from "../Store/Slices/CartSlice";

function Product({ product }) {
  const dispatch = useDispatch();
  const handleCard = (e) => {
    e.preventDefault();
    dispatch(addtocart(product));
  };
  return (
    <>
      <div className="relative ">
        <img className="h-56 w-full " src={product.proimg} alt="" />
        <p className="ps-2 ">{product.title}</p>
        <p className="ps-2 ">${product.price}</p>
        <div className="flex relative ps-2 py-1 ">
          <FaStar className="text-yellow-500"></FaStar>
          <FaStar className="text-yellow-500"></FaStar>
          <FaStar className="text-yellow-500"></FaStar>
          <FaStar className="text-yellow-500"></FaStar>
        </div>
        <div
          onClick={handleCard}
          className="absolute right-2 bottom-2  group w-8 h-8 hover:w-32 flex items-center 
        justify-center bg-red-600 hover:bg-red-700 rounded-full text-white "
        >
          <span className="group-hover:hidden">+</span>
          <span className=" hidden group-hover:block">Add to cart</span>
        </div>
      </div>
    </>
  );
}

export default Product;

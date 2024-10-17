import React from "react";
import { useSelector } from "react-redux";
import Product from "../components/Product";
import noProduct from "../assets/images/NoProduct.jpg";

function Filter() {
  const filterProduct = useSelector((state) => state.product.FilterData);
  console.log("filter Data", filterProduct);
  return (
    <>
      <div className="container-fluid  mt-2 px-4 md:px-16 lg:px-24 space-x-2">
        {filterProduct.length > 0 ? (
          <>
            {" "}
            <h1 className=" text-center font-bold text-3xl py-2">
              Filter Data
            </h1>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {filterProduct.map((product, index) => {
                return <Product key={index} product={product} />;
              })}
            </div>
          </>
        ) : (
          <div className="flex justify-center items-start">
            <img className="h-[380px] w-auto" src={noProduct} alt="" />
          </div>
        )}
      </div>
    </>
  );
}

export default Filter;

import React, { useEffect } from "react";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../Store/Slices/ProductSlice";
import { ProductSection } from "../assets/mockData";

function Shop() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.products);
  // console.log(product);

  useEffect(() => {
    dispatch(setProducts(ProductSection));
  }, [dispatch]);

  return (
    <>
      <div className="container-fluid  mt-2 px-4 md:px-16 lg:px-24 space-x-2">
        <h1 className=" text-center font-bold text-3xl py-2">Shop</h1>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {product.map((product, index) => {
            return <Product key={index} product={product} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Shop;

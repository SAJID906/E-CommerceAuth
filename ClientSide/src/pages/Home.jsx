import React, { useEffect } from "react";
import { Categories, ProductSection } from "../assets/mockData";
import herocart from "../assets/images/herocart2.jpg";
import InfoSection from "../components/InfoSection";
import CategorieSection from "../components/CategorieSection";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../Store/Slices/ProductSlice";
import Product from "../components/Product";
import Shop from "./Shop";

function Home() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.products);
  // console.log(product);

  useEffect(() => {
    dispatch(setProducts(ProductSection));
  }, [dispatch]);
  return (
    <>
      <div className="container-fluid  mt-2 px-4 md:px-16 lg:px-24 space-x-2">
        <div className="w-full flex flex-col md:flex-row">
          <div className=" w-full md:w-3/12 border  mx-1">
            <h1 className="bg-red-600 py-2 px-2 text-white font-bold text-xs  ">
              SHOP BY CATEGORIES
            </h1>
            <ul className="space-y-3 bg-gray-100 p-3 border">
              {Categories.map((val, index) => {
                return (
                  <li
                    className="flex items-center text-sm font-medium"
                    key={index}
                  >
                    <div className="h-2 w-2 rounded-full bg-red-600 mr-2"></div>
                    {val}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className=" w-full md:w-9/12 mt-8 md:mt-0 border border-yellow-300 mx-1 relative ">
            <div className="relative h-96 w-full">
              <img
                className="image-overlay bg-cover bg-center h-96 w-full"
                src={herocart}
                alt=""
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>

            <div className="  absolute top-8 left-6 ">
              <p className="text-white font-semibold ">Code With CodeEncoder</p>
              <h2 className=" text-white text-3xl font-bold">
                Welcom To E-Shop
              </h2>
              <p className="text-white font-semibold text-lg">
                + MILLIONS+ PRODUCTS
              </p>
              <button className="text-white bg-red-600  rounded   px-6 mt-2 py-2">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      <InfoSection />
      <CategorieSection />
      <div className="container-fluid  mt-2 px-4 md:px-16 lg:px-24 space-x-2">
        <h1 className=" text-center font-bold text-2xl">Top Products</h1>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {product.slice(0, 5).map((product, i) => {
            return (
              <div key={i}>
                <Product product={product} />
              </div>
            );
          })}
        </div>
      </div>

      <Shop />
    </>
  );
}

export default Home;

import React from "react";
import { DataCatogrieSection } from "../assets/mockData";
function CategorieSection() {
  return (
    <div className="container-fluid my-8 px-4 md:px-16 lg:px-24 ">
      <div className="border rounded grid grid-cols-2 md:grid-cols-4 gap-1">
        {DataCatogrieSection.map((item, index) => {
          return (
            <div key={index} className="relative">
              {/* for background of image dark */}
              <div className="relative">
                <img className="h-60 w-full" src={item.imgurl} alt="" />
                <div className="absolute inset-0 bg-opacity-50 bg-black"></div>
              </div>
              <h1 className="absolute text-white top-5 left-3 md:top-10 md:left-7 font-bold text-2xl">
                {item.title}
              </h1>
              <p className="cursor-pointer absolute top-12 left-3 md:top-20 md:left-7 text-white font-semibold">
                View all
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CategorieSection;

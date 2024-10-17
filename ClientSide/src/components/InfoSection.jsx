import React from "react";
import { infoItmes } from "../assets/mockData";

function InfoSection() {
  return (
    <>
      <div className="container-fluid my-8 px-4 md:px-16 lg:px-24 space-x-2 ">
        <div className="  grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5  ">
          {infoItmes.map((item, index) => {
            return (
              <div
                key={index}
                className="border rounded flex flex-col items-center px-4 py-2 gap-2 mx-1 transition-transform duration-300 transform hover:scale-90  "
              >
                {item.icon}
                <h1 className=" text-center font-bold text-lg">{item.title}</h1>
                <p className="text-center">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default InfoSection;

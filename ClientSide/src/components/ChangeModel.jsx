import React, { useState } from "react";

function ChangeModel({ isModelOpen, setisModelOpen, setAddress }) {
  const [changeAddress, setchangeAddress] = useState("");
  console.log(changeAddress);
  if (!isModelOpen) return null;
  return (
    <div className=" h-52 w-96   ">
      <input
        className="  bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 sm:text-sm"
        placeholder="Change Address..."
        type="text"
        onChange={(e) => setchangeAddress(e.target.value)}
      />
      <div className="flex  justify-center gap-4 mt-3">
        <button
          onClick={() => {
            setisModelOpen(false);
          }}
          className="bg-blue-500 rounded py-1 px-2 text-white"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            setAddress(changeAddress);
            setisModelOpen(false);
          }}
          className="bg-blue-500 rounded py-1 px-2 text-white"
        >
          SaveChange
        </button>
      </div>
    </div>
  );
}

export default ChangeModel;

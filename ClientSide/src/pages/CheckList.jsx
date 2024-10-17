import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";

function CheckList() {
  const cart = useSelector((state) => state.cart.products);
  // To print the total_price
  const Show = useSelector((state) => state.cart);
  console.log("checklist", cart);
  const [billingToggle, setbillingToggle] = useState(false);
  const [shippingToggle, setshippingToggle] = useState(false);
  const [paymentToggle, setpaymentToggle] = useState(false);
  const [paymentMethod, setpaymentMethod] = useState("cod");
  return (
    <>
      <div className="container-fluid  mt-2 px-4 md:px-16 lg:px-24 space-x-2">
        <h3 className="text-2xl font-semibold mb-4 px-2">CHECKOUT</h3>
        <div className="grid  lg:grid-cols-10 gap-4 relative ">
          <div className="left col-span-1 lg:col-span-7  ">
            <div className="border px-4">
              <div
                className="flex justify-between items-center"
                onClick={() => {
                  setbillingToggle(!billingToggle);
                }}
              >
                <h1 className="font-bold text-xl">Billing Information</h1>
                {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
              </div>
              <div
                className={`space-y-4 py-2 ${billingToggle ? "" : "hidden"}`}
              >
                <div>
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    placeholder="Enter Name..."
                    className=" bg-white  border border-slate-300 w-full py-2 pl-2 rounded focus:outline-none focus:border-sky-500"
                  />
                </div>
                <div>
                  <label htmlFor="">Email</label>
                  <input
                    type="text"
                    placeholder="Enter Email..."
                    className=" bg-white  border border-slate-300 w-full py-2 pl-2 rounded focus:outline-none focus:border-sky-500"
                  />
                </div>
                <div>
                  <label htmlFor="">Phone</label>
                  <input
                    type="text"
                    placeholder="Enter Phone #..."
                    className=" bg-white  border border-slate-300 w-full py-2 pl-2 rounded focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>
              <hr />
            </div>
          </div>
          {/*  */}
          <div className="left col-span-1 lg:col-span-7 ">
            <div className="border px-4">
              <div
                className="flex justify-between items-center"
                onClick={() => {
                  setshippingToggle(!shippingToggle);
                }}
              >
                <h1 className="font-bold text-xl">Shipping Information</h1>
                {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
              </div>
              <div
                className={`space-y-4 py-2 ${shippingToggle ? "" : "hidden"}`}
              >
                <div>
                  <label htmlFor="">Address</label>
                  <input
                    type="text"
                    placeholder="Enter Address..."
                    className=" bg-white  border border-slate-300 w-full py-2 pl-2 rounded focus:outline-none focus:border-sky-500"
                  />
                </div>
                <div>
                  <label htmlFor="">City</label>
                  <input
                    type="text"
                    placeholder="Enter City..."
                    className=" bg-white  border border-slate-300 w-full py-2 pl-2 rounded focus:outline-none focus:border-sky-500"
                  />
                </div>
                <div>
                  <label htmlFor="">Zip Code</label>
                  <input
                    type="text"
                    placeholder="Enter Phone #..."
                    className=" bg-white  border border-slate-300 w-full py-2 pl-2 rounded focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>
              <hr />
            </div>
          </div>
          {/*  */}
          {/*  */}
          <div className="left col-span-1 lg:col-span-7  ">
            <div className="border px-4">
              <div
                className="flex justify-between items-center"
                onClick={() => {
                  setpaymentToggle(!paymentToggle);
                }}
              >
                <h1 className="font-bold text-xl">Payment Method</h1>
                {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
              </div>
              <div
                className={`space-y-4 py-2 ${paymentToggle ? "" : "hidden"}`}
              >
                <div className="flex">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "cod"}
                    onChange={() => {
                      setpaymentMethod("cod");
                    }}
                  />

                  <label htmlFor="" className="block text-gray-700 ml-2">
                    Cash on Delivery
                  </label>
                </div>
                <div className="flex">
                  <input
                    name="payment"
                    type="radio"
                    checked={paymentMethod === "dc"}
                    onChange={() => {
                      setpaymentMethod("dc");
                    }}
                  />
                  <label htmlFor="" className="block text-gray-700 ml-2">
                    Debit Card
                  </label>
                </div>
                {paymentMethod === "dc" && (
                  <div className="p-4   bg-gray-100">
                    <h3>Debit Card Information</h3>
                    <div className="">
                      <label
                        htmlFor=""
                        className="block font-semibold text-gray-700 mb-2"
                      >
                        Card Number
                      </label>
                      <input
                        type="text"
                        className="w-full rounded p-2 border focus:outline-none"
                        placeholder="Enter Card NO..."
                      />
                    </div>
                    <div>
                      <label
                        htmlFor=""
                        className="block font-semibold text-gray-700 mb-2"
                      >
                        Card Holder Name
                      </label>
                      <input
                        type="text"
                        className="w-full rounded p-2 border focus:outline-none"
                        placeholder="Enter Name..."
                      />
                    </div>
                    <div>
                      <div className="flex ">
                        <div className="w-1/2">
                          <label htmlFor="" className=" block mb-2">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            className="w-full rounded p-2 border focus:outline-none"
                            placeholder="MM/YY"
                          />
                        </div>
                        <div className="w-1/2 ml-3">
                          <label
                            htmlFor=""
                            className="block font-semibold text-gray-700 mb-2"
                          >
                            CVV
                          </label>
                          <input
                            type="text"
                            className="w-full rounded p-2 border focus:outline-none"
                            placeholder="MM/YY"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <hr />
            </div>
          </div>
          {/*  */}
          <div className="right col-span-1 lg:col-span-3  w-full lg:w-80 border lg:absolute right-0">
            <div className="card px-4 mt-3">
              <h2 className="text-xl font-bold">Order Summary</h2>
              {cart.map((val) => {
                return (
                  <>
                    <div className="flex  py-2 space-x-1 justify-between ">
                      <img
                        className="w-16 h-16 rounded"
                        src={val.proimg}
                        alt=""
                      />
                      <div className="ps-3">
                        <h1 className="font-semibold">{val.title}</h1>
                        <span>
                          {" "}
                          ${val.price}x{val.quantity}
                        </span>
                      </div>
                      <span>${val.price}</span>
                    </div>

                    <hr />
                  </>
                );
              })}
              <div className="flex justify-between">
                <span className="font-semibold">Total Price</span>
                <span>${Show.totalPrice}</span>
              </div>
              {/* navigate to checklist page */}
              <button className="w-full bg-red-600 rounded-sm text-white mt-2 py-2">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckList;

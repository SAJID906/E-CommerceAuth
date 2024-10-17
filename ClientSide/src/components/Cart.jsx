import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import emptyCart from "../assets/images/emptycart.jpg";
import { RiDeleteBin5Line } from "react-icons/ri";
import ChangeModel from "./ChangeModel";
import {
  decreaseQuantity,
  increaseQuantity,
  remove,
} from "../Store/Slices/CartSlice";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [address, setAddress] = useState("Nizam pura");
  const ShowCart = useSelector((state) => state.cart.products);
  const Show = useSelector((state) => state.cart);
  console.log("at card component", ShowCart);
  //useState for model colse and oppen
  const [isModelOpen, setisModelOpen] = useState(false);
  //remove item form
  const dispatch = useDispatch();
  //move towards checklist page
  const navigate = useNavigate();
  return (
    <>
      <div className="container-fluid  mt-2 px-4 md:px-16 lg:px-24 space-x-2">
        {ShowCart.length > 0 ? (
          <div className="grid md:grid-cols-10 gap-4 relative ">
            <div className="left col-span-7  ">
              <h1 className="font-bold text-xl">SHOPPING CART</h1>
              <div className="flex justify-between text-sm font-semibold mt-2">
                <h1>PRODUCTS</h1>
                <div className="flex gap-4">
                  <p>PRICE</p>
                  <p>QUANTITY</p>
                  <p>SUBTOTLE</p>
                  <p>REMOVE</p>
                </div>
              </div>
              <hr />
              <div className="main">
                {ShowCart.map((item) => {
                  return (
                    <>
                      <div className=" flex justify-between items-center">
                        <div className="flex items-center py-8 ">
                          <img
                            className="w-16 h-16 rounded-sm"
                            src={item.proimg}
                            alt=""
                          />
                          <h2 className="px-2 font-semibold">{item.title}</h2>
                        </div>

                        <div className="right flex gap-7">
                          <p>${item.price}</p>
                          <div className=" ">
                            {/* Decrease quantity */}
                            <button
                              onClick={() => {
                                dispatch(decreaseQuantity(item.id));
                              }}
                              className="border rounded-sm"
                            >
                              -
                            </button>
                            {item.quantity}
                            <button
                              onClick={() => {
                                dispatch(increaseQuantity(item.id));
                              }}
                              className="border"
                            >
                              +
                            </button>
                          </div>
                          <div>{item.quantity * item.price}</div>
                          <RiDeleteBin5Line
                            onClick={() => {
                              dispatch(remove(item.id));
                            }}
                          />
                        </div>
                      </div>
                      <hr />
                    </>
                  );
                })}
              </div>
            </div>
            <div className="right col-span-3  border">
              <div className="card px-4 mt-3">
                <h2 className="text-xl font-bold">CART TOTALS</h2>
                <div className="flex justify-between py-2">
                  <span>TOTEL ITEMS:</span>
                  <span>{Show.quantity}</span>
                </div>
                <hr />
                <div className="mb-4 border-b pb-2 my-2 py-2">
                  <p>Shipping:</p>
                  <p>
                    Shipping to: <span className="font-bold">{address}</span>
                  </p>

                  <button
                    className="text-blue-600 hover:underline mt-1 "
                    onClick={() => {
                      setisModelOpen(true);
                    }}
                  >
                    Change address
                  </button>
                </div>
                <div className="flex justify-between mb-4">
                  <span>Total Price:</span>
                  <span>{Show.totalPrice}</span>
                </div>
                {/* navigate to checklist page */}
                <button
                  onClick={() => {
                    navigate("/checklist");
                  }}
                  className="w-full bg-red-600 rounded-sm text-white py-2"
                >
                  Proced to Checkout
                </button>
              </div>
            </div>
            {/* changemodel width and height set */}
            <div className="col-span-12 m-auto">
              <ChangeModel
                isModelOpen={isModelOpen}
                setisModelOpen={setisModelOpen}
                setAddress={setAddress}
              ></ChangeModel>
            </div>
          </div>
        ) : (
          <div className="  flex flex-col justify-center h-96 items-center">
            <img className="h-80 w-96" src={emptyCart} alt="" />
            <h4 className="text-3xl font-semibold text-red-500">
              Your cart is empty
            </h4>
            <h5 className="text-2xl">Add something to make me happy</h5>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;

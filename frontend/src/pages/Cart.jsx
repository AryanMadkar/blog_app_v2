import React from "react";
import logo from "/logo.png";

const Cart = () => {
  return (
    <div className="min-h-[80vh]">
      <div className="border flex flex-col items-center justify-start w-full p-2 min-h-[93vh] rounded-xl">
        <div>
          <h1 className="text-4xl font-bold">PROCIDE TO CHECKOUT</h1>
        </div>
        <div className="flex w-full h-full flex-row items-center justify-center">
          <div className="w-1/2 h-full flex flex-row ">
            <div className="flex flex-row items-center justify-center gap-2">
              <img src={logo} alt="logo" className="h-10 w-10 rounded-full" />
              <h1 className="text-2xl font-bold">Backtrack Store</h1>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold">Total Price:</h1>
            </div>
          </div>
          <div className="w-1/2 h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

import React from "react";
import ShoePart from "./ShoePart";

const Right = () => {
  return (
    <>
      <div className="w-[300px]">
        <h2 className="text-xl font-medium">Order Summary </h2>
        {/* 1cont */}
        <div className="flex justify-between my-2 ">
          <div className="text-gray-400 text-sm font-normal">Subtotal </div>
          <div className="text-gray-400 text-sm font-normal">₹9 195.00 </div>
        </div>
        {/* 2nd cont */}
        <div className="flex justify-between my-2 ">
          <div className="text-gray-400 text-sm font-normal">
            Delivery/Shipping{" "}
          </div>
          <div className="text-gray-400 text-sm font-normal">₹1 250.00 </div>
        </div>
        <hr />
        <div className="flex justify-between my-2 ">
          <div className=" text-sm font-normal">Total</div>
          <div className=" text-sm font-normal">₹ 10 445.00 </div>
        </div>
        <hr />
        <p className="text-xs my-3">
          (The total reflects lhe pnce of your order, mcludmg all duties and
          taxes){" "}
        </p>
        <ShoePart />
      </div>
    </>
  );
};

export default Right;

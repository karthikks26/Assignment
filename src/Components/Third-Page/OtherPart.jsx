import React from "react";
import Input from "./Input";
import { Link } from "react-router-dom";

const OtherPart = () => {
  return (
    <>
      <div>
        <div className="flex gap-4">
          <Input placeholder="MM/YV" />
          <Input placeholder="CVV" />
        </div>
        <p className="text-gray-400 text-sm my-3 ">
          By clicking Place Order, you agree to the eShopWorld{" "}
          <Link className="text-blue-500 underline">Terms and Conditions</Link>{" "}
          .{" "}
        </p>
        <button className="bg-gray-200 text-white py-3 px-2 w-[400px] rounded-full text-sm my-5 ">
          <span className="text-gray-500">Place Order</span>
        </button>
      </div>
    </>
  );
};

export default OtherPart;

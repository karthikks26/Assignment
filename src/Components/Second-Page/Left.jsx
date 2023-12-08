import React from "react";
import shoe from "../../assets/shoe.png";
import Links from "./Links";
import { useNavigate } from "react-router-dom";

const Left = () => {
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/thirdpage");
  };
  return (
    <>
      <div className="flex flex-col w-[500px] justify-start">
        <h2 className="text-xl font-medium">
          When would you like to get your order?
        </h2>
        <div className="flex items-center gap-3 border-4 border-black py-6 px-3 rounded-lg my-4 justify-between">
          <div className="font-semibold">Arrives Thu, 14 Dec - Wed, 3 Jan </div>
          <div className="text-gray-300">₹ 1 250.00 </div>
        </div>
        <p className="mt-4 font-medium">Arrives Thu, 14 Dec - Wed, 3 Jan </p>
        <img src={shoe} width="100px" />
        <p className="text-xs text-gray-500">
          This is an international shipment requiring customs clearance{" "}
        </p>
        <button
          className="bg-black text-white py-3 px-2 w-[400px] rounded-full mt-7 mb-4 "
          onClick={handleclick}
        >
          Continue
        </button>
        <Links />
      </div>
    </>
  );
};

export default Left;

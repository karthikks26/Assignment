import React from "react";

const Links = () => {
  return (
    <>
      <div className="my-3">
        <hr />
        <div className="flex justify-between">
          <p className="my-4 text-xl ">Delivery</p>
          <button className="p-2 border-2 border-gray-200 rounded-full my-2 w-[60px]">
            Edit
          </button>
        </div>
        <p className="text-gray-400 font-normal text-sm my-3">
          ANUK JAIN
          <br /> 25 C ROVED STREET
          <br /> anukjain00786@gmail.com
          <br /> 098364 65034 <br />
          PAN{" "}
        </p>
        <hr />
        <hr />
        <p className="my-4 text-xl text-gray-300 ">Shipping</p>
        <hr />
        <hr />
        <p className="my-4 text-xl text-gray-300 ">Billing</p>
        <hr />
        <hr />
        <p className="my-4 text-xl text-gray-300">Payment</p>
        <hr />
      </div>
    </>
  );
};

export default Links;

import React from "react";

const Links = () => {
  return (
    <>
      <div className="my-3">
        <hr />
        <div className="flex justify-between">
          <p className="my-4 text-xl text-gray-400">Delivery</p>
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
        {/* second  */}
        <div className="flex justify-between">
          <p className="my-4 text-xl text-gray-400 ">Shipping</p>
          <button className="p-2 border-2 border-gray-200 rounded-full my-2 w-[60px]">
            Edit
          </button>
        </div>
        <p className="text-gray-400 font-normal text-sm my-3">
          ₹ 1 250.00 Shipping
          <br /> Shipment One
          <br /> Arrives Thu, 14 Dec - Wed, 3 Jan
        </p>
        <hr />
        {/* third  */}
        <div className="flex justify-between">
          <p className="my-4 text-xl text-gray-400 ">Billing</p>
          <button className="p-2 border-2 border-gray-200 rounded-full my-2 w-[60px]">
            Edit
          </button>
        </div>
        <p className="text-gray-400 font-normal text-sm my-3">
          ANUK JAIN
          <br /> 25 C ROVED STREET
          <br /> 098364 65034
        </p>

        <hr />

        <hr />
        <p className="my-4 text-xl text-gray-400">Payment</p>
        <hr />
      </div>
    </>
  );
};

export default Links;

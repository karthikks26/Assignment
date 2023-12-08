import React from "react";
import { BsBox2 } from "react-icons/bs";
import Form from "./Form";
import FormProps from "./FormProps";

const left = () => {
  return (
    <>
      <div className="flex flex-col w-[500px] justify-start">
        <h2 className="text-xl font-medium">
          How would you like to get your order?{" "}
        </h2>
        <p className="text-gray-400">
          Customs regulation for India require a copy of the recipient's KYC.
          The address on the KYC needs to match the shipping address. Our
          courier will contact you via SMS/email to obtain a copy of your KYC.
          The KYC will be stored securely and used solely for the purpose of
          clearing customs (including sharing it with customs officials) for all
          orders and returns. If your KYC does not match your shipping address,
          please click the link for more information. Learn More{" "}
        </p>

        <div className="flex items-center gap-3 border-4 border-black py-6 px-3 rounded-lg my-4">
          <BsBox2 /> <span className="font-semibold">Deliver It</span>
        </div>
        <button className="p-2 border-2 border-gray-200 rounded-full my-2 w-[300px]">
          Become a Member
        </button>
        <button className="p-2 border-2 border-gray-200 rounded-full w-[100px]">
          Login
        </button>
        <FormProps />
      </div>
    </>
  );
};

export default left;

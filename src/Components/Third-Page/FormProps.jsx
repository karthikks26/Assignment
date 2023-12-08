import React from "react";
import Form from "./Form";
import { MdCreditCard } from "react-icons/md";
import gpay from "../../assets/Google_Pay_Logo.svg";

const FormProps = () => {
  return (
    <>
      <div>
        <Form placeholder="Promo" />
        <h2 className="text-xl font-medium">How would you like to pay? </h2>
        <div className="relative my-5">
          <input
            className="border-2 border-black rounded-md w-[300px] py-3 focus:outline-none focus:ring-blue-200 pl-5 cursor-pointer "
            placeholder={` Credit or Debit Card`}
            readOnly
          />
          <MdCreditCard className="absolute top-4 left-1 " />
        </div>

        <div className="relative  mb-4">
          <input className="border-2 border-gray-300 rounded-md w-[300px] py-3 focus:outline-none focus:ring-blue-200 pl-5 cursor-pointer text-center " />
          <button className="p-2 border-2 border-gray-200 rounded-full my-2  absolute top-1 left-1">
            <img src={gpay} width="30px" />
          </button>
        </div>
        <h2 className="text-xl font-medium"> Enter your payment details: </h2>

        <Form placeholder="Name on card " />
        <Form placeholder="Card number  " />
      </div>
    </>
  );
};

export default FormProps;

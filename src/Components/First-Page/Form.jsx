import React from "react";
import Address from "./Address";

const Form = ({ name }) => {
  return (
    <>
      <div>
        <div className="my-4 w-[310px] relative">
          <input className="border-2 border-gray-300 rounded-md w-[300px] py-2 focus:outline-none focus:ring-blue-200 pl-3 " />
          <p className="absolute -top-2 left-2 text-xs text-gray-500 bg-white font-semibold">
            {name}
          </p>
          <div className="w-3 h-3 bg-red-500 rounded-full absolute right-3 top-4 mx-2"></div>
        </div>
      </div>
    </>
  );
};

export default Form;

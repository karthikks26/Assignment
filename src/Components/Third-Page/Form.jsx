import React from "react";

const Form = ({ placeholder }) => {
  return (
    <>
      <div>
        <div className="my-4 w-[310px] relative">
          <input
            className="border-2 border-gray-300 rounded-md w-[300px] py-2 focus:outline-none focus:ring-blue-200 pl-3 "
            placeholder={placeholder}
          />
        </div>
      </div>
    </>
  );
};

export default Form;

import React from "react";

const Input = ({ placeholder }) => {
  return (
    <>
      <div>
        <input
          className="border-2 border-gray-300 rounded-md  py-2 focus:outline-none focus:ring-blue-200 pl-3  w-[160px] "
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default Input;

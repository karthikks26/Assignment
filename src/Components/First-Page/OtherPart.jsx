import React from "react";
import Links from "./Links";
import { useNavigate } from "react-router-dom";

const OtherPart = () => {
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/secondpage");
  };
  return (
    <>
      <button
        className="bg-black text-white py-3 px-2 w-[400px] rounded-full  "
        onClick={handleclick}
      >
        Continue
      </button>
      <Links />
    </>
  );
};

export default OtherPart;

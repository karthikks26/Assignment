import React from "react";
import icon from "../assets/nikeicon.png";
import { BiMessageDetail } from "react-icons/bi";
import { IoBagOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";

const Header = () => {
  return (
    <>
      <div className=" flex justify-between px-9 items-center">
        <div>
          <img src={icon} width="100px" />
        </div>
        <div className=" w-[300px] flex justify-between items-center">
          <span>000 800 100 9538</span>
          <BiMessageDetail />
          <IoBagOutline />
          <GoPerson />
        </div>
      </div>
    </>
  );
};

export default Header;

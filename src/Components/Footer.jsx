import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
} from "../Imageassets";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="bg-black text-gray-400  flex items-center justify-between px-3 py-3 ">
        <div className="flex gap-3 text-sm">
          <div className="flex items-center text-white">
            <IoLocationOutline />
            India
          </div>
          <div> &copy; {currentYear} NIKE,Inc All rights reserved.</div>
          <div>Terms of Use</div>
          <div>Terms Of Sale</div>
          <div>Privacy Policy</div>
        </div>
        <div className="flex gap-4">
          <img src={img1} width="50px" />
          <img src={img2} width="50px" />
          <img src={img3} width="50px" />
          <img src={img4} width="50px" />
          <img src={img5} width="50px" />
          <img src={img6} width="50px" />
          <img src={img10} width="50px" />
          <img src={img7} width="50px" />
          <img src={img8} width="50px" />
          <img src={img9} width="50px" />
        </div>
      </footer>
    </>
  );
};

export default Footer;

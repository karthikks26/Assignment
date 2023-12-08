import React from "react";
import FormProps from "./FormProps";
import OtherPart from "./OtherPart";
import Links from "./Links";

const Left = () => {
  return (
    <>
      <div className="flex flex-col w-[500px] justify-start">
        <h2 className="text-xl font-medium">Have a promo code?</h2>
        <FormProps />
        <OtherPart />
        <Links />
      </div>
    </>
  );
};

export default Left;

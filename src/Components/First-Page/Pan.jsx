import React from "react";
import Form from "./Form";
import { Link } from "react-router-dom";
import OtherPart from "./OtherPart";

const Pan = () => {
  return (
    <>
      <div className="my-3">
        <h2 className="text-xl font-medium">What's your PAN?</h2>
        <Form name="PAN" />
        <p className="text-xs text-gray-600  -mt-3">
          Enter your PAN to enable payment with UPI, Net Banking or local card
          methods{" "}
        </p>
        <div className="my-5 flex items-center gap-2">
          <input type="checkbox" required className="mx-2  self-start mt-3" />
          <div>
            <span className="text-xs text-gray-600 p-0 m-0">
              I have read and consent to eShopWor1d processing my information in
              <br />
              accordance with the{" "}
              <Link className="text-blue-500 underline">
                Privacy Statement
              </Link>{" "}
              and <Link className="text-blue-500 underline">Cookie Policy</Link>
              . eShopWor1d is a trusted Nike partner.
            </span>
          </div>
        </div>
        <OtherPart />
      </div>
    </>
  );
};

export default Pan;

import React from "react";
import Form from "./Form";
import Address from "./Address";
import Contact from "./Contact";
import Pan from "./Pan";

const FormProps = () => {
  return (
    <>
      <div className="my-4">
        <h1 className="text-xl font-medium">Enter your name and address: </h1>
        <Form name="First Name" />
        <Form name="Last Name" />
        <Form name="Address Line 1 " />
        <p className="text-xs text-gray-600  -mt-3">
          We do not ship to P.O. boxes
        </p>
        <Form name="Address Line 2 " />
        <Form name="Address Line 3 " />
        <div className="flex gap-4">
          <Address name="Postal Code " />
          <Address name="Locality " />
        </div>
        <div className="flex gap-4">
          <Address name="State/Territory " />
          <Address />
        </div>
        <Contact />
        <Pan />
      </div>
    </>
  );
};

export default FormProps;

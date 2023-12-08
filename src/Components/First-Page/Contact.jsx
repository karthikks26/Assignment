import React from "react";
import Form from "./Form";

const Contact = () => {
  return (
    <>
      <div className="my-3">
        <h2 className="text-xl font-medium">
          What's your contact information?{" "}
        </h2>
        <Form name="Email" />
        <p className="text-xs text-gray-600  -mt-3">
          A confirmation email will be sent after checkout.
        </p>
        <Form name=" Phone Number" />
        <p className="text-xs text-gray-600  -mt-3">
          A carrier might contact you to confirm dellvery.{" "}
        </p>
      </div>
    </>
  );
};

export default Contact;

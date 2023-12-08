import React from "react";
import Right from "./Right";
import Left from "./Left";

const FirstPage = () => {
  return (
    <>
      <div className="flex justify-center gap-28">
        <Left />
        <Right />
      </div>
    </>
  );
};

export default FirstPage;

import React from "react";
import Left from "./Left";
import Right from "../First-Page/Right";

const SecondPage = () => {
  return (
    <>
      <div className="flex justify-center gap-28">
        <Left />
        <Right />
      </div>
    </>
  );
};

export default SecondPage;

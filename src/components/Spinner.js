import React from "react";
import Loading from "./loading.gif";
const Spinner = () => {
  return (
    <div className="text-center align-center">
      <img className="my-3" src={Loading} alt="Loading"></img>
    </div>
  );
};

export default Spinner;

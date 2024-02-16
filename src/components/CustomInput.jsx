import React from "react";

const CustomInput = ({ labelName, getInput, inputKey }) => {
  return (
    <div className="inputData">
      <label>{labelName}</label>
      <input type="text" onChange={(e) => getInput(e, inputKey)} />
    </div>
  );
};

export default CustomInput;

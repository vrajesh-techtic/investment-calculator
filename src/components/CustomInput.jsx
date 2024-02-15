import React from "react";

const CustomInput = ({ labelName, getInput, inputKey }) => {
  function handleChange(e) {
    getInput(inputKey, e.target.value);
  }

  return (
    <div className="inputData">
      <label>{labelName}</label>
      <input type="number" onChange={handleChange} required />
    </div>
  );
};

export default CustomInput;

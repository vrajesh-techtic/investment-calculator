import React, { useState } from "react";
import "../css/input-container.css";
import CustomInput from "./CustomInput";
import { calculate } from "../util/investment";
import TableContainer from "./TableContainer";

const InputContainer = () => {
  const [res, setres] = useState(0);
  const [val, setVal] = useState({
    initial: 0,
    annual: 0,
    expected: 0,
    duration: 0,
  });

  function updateData(inputKey, inputValue) {
    setVal((items) => {
      const newVal = { ...items };
      newVal[inputKey] = inputValue;
      return newVal;
    });
  }

  function handleClick() {
    if (
      val.initial === 0 ||
      val.annual === 0 ||
      val.expected === 0 ||
      val.duration === 0
    ) {
      alert("Enter all values!");
    } else {
      setres(calculate(val));
    }
  }

  return (
    <>
      <div className="main-container">
        <div className="input-container">
          <div>
            <CustomInput
              labelName={`Initial Investment (in Rs.) :`}
              getInput={updateData}
              inputKey={"initial"}
            />
            <CustomInput
              labelName={"Annual Investment (in Rs.) :"}
              getInput={updateData}
              inputKey={"annual"}
            />
          </div>

          <div>
            <CustomInput
              labelName={"Expected Return (%) :"}
              getInput={updateData}
              inputKey={"expected"}
            />
            <CustomInput
              labelName={"Duration (in years) :"}
              getInput={updateData}
              inputKey={"duration"}
            />
          </div>
        </div>
        <button className="btn btn-primary" onClick={handleClick}>
          Calculate
        </button>
      </div>

      {res ? <TableContainer data={res} /> : null}
    </>
  );
};

export default InputContainer;

import React, { useState } from "react";

const FormInput = (props) => {
  const [inputValue, setinputValue] = useState("");

  return (
    <div className="form-input">
      <label htmlFor={props.forname}>{props.inputValue}</label>
      <input
        id={props.forname}
        name={props.forname}
        type={props.inputType}
        value={inputValue}
        onChange={(e) => {
          setinputValue(e.currentTarget.value);
          props.changeValue(e.currentTarget.value);
        }}
      />
    </div>
  );
};

export default FormInput;

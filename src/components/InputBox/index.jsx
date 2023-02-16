import React from "react";
import "./style.js";
import { Label,  InputStyled } from "./style";
const Input = (props) => {
  return (
    <div className={`inputBox ${props.className}`}>
      <Label htmlFor={props.id}>{props.label}</Label>
      <InputStyled
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        onChange={props.onChange}
        required
        value={props.value}
      />
    </div>
  );
}
export default Input;
/*
  you must add the value from state and onChange function as props
  and className if you want to change the style  --optional
*/
import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { DropdownStyle, StyledArrow } from "./styled";

const Dropdown = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setDropdownOpen(!dropdownOpen);
    setOpen(!open);
  };
  return (
    <DropdownStyle>
      <div className="titleDropDown" onClick={toggle}>
        <h3>{props.title}</h3>
        <StyledArrow open={open} className="toggle">
          <SlArrowDown />
        </StyledArrow>
      </div>
      <div>{dropdownOpen && props.children}</div>
    </DropdownStyle>
  );
};

export default Dropdown;

import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { DropdownStyle,StyledArrow, Title } from "./styled";

const Dropdown = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setDropdownOpen(!dropdownOpen);
    setOpen(!open);
  };
  return (
    <DropdownStyle width={props.width}>
      <Title
        onClick={toggle}
        border={props.border}
        padding={props.padding}
        borderRadius={props.borderRadius}
      >
        <h3>{props.title}</h3>
        <StyledArrow open={open} className="toggle">
          <SlArrowDown />
        </StyledArrow>
      </Title>
      <div>{dropdownOpen && props.children}</div>
    </DropdownStyle>
  );
};

export default Dropdown;

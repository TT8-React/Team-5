import React from "react";
import { StyleLogo } from "./Style";

const index = (props) => {
  return (
    <StyleLogo>
      <p>{props.body}</p>
    </StyleLogo>
  );
};

export default index;

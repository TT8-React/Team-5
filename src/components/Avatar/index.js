import React from "react";
import AvatarImg from "../../images/Avatar.png";
import { StyleAvatar } from "./Style";

const Avatar = () => {
  return (
    <StyleAvatar>
      <img src={AvatarImg} />
    </StyleAvatar>
  );
};

export default Avatar;

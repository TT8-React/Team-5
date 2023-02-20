import React, { useState } from "react";
import AvatarImg from "../../images/Avatar.png";
import { StyleAvatar } from "./styled";

const Avatar = () => {
  const [Open, setProfileDetails] = useState(false);

  const toggle = () => {
    setProfileDetails(!Open);
  };
  return (
    <StyleAvatar>
      <div className="imgBox" onClick={toggle}>
        <img src={AvatarImg} />
        {Open && <div className="profileDetails">Profile Details</div>}
      </div>
    </StyleAvatar>
  );
};

export default Avatar;

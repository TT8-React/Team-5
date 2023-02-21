import React, { useState } from "react";
import { Link } from "react-router-dom";
import AvatarImg from "../../images/Avatar.png";
import { StyleAvatar } from "./styled";

const Avatar = () => {
  const [Open, setProfileDetails] = useState(false);

  const toggle = () => {
    setProfileDetails(!Open);
  };
  return (
    <StyleAvatar {...{Open}}>
      <div className="imgBox" onClick={toggle}>
        <img src={AvatarImg} />
        {Open && <Link to="/Home/ProfileDetails" className="profileDetails">Profile Details</Link>}
      </div>
    </StyleAvatar>
  );
};

export default Avatar;

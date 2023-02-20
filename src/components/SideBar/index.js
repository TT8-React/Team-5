import React, { useContext } from "react";
import Dropdown from "../DropDown";
import { StyleSideBar } from "./styled";
import Logo from "../Logo";
import { MainButton } from "../../styled/styleComponent";
import { AuthContext } from "../../context";
import { Link } from "react-router-dom";
const SideBar = () => {
  const [, setAuthenticated] = useContext(AuthContext);
  return (
    <StyleSideBar>
      <Logo body="LOGO HERE" />
      <ul>
        <li>Dashboard</li>
        <li>Company details</li>
        <li>
          <Dropdown title="Report">
            <ul>
              <Link to="/Home/Report">
                <li>Report</li>
              </Link>
              <Link to="/Home/MyReport">
                <li>My Report</li>
              </Link>
            </ul>
          </Dropdown>
        </li>
        <li>Data upload</li>
        <li>
          <Dropdown title="Analytics">
            <ul>
              <li>Environment</li>
              <li>Social</li>
              <li>Governance</li>
            </ul>
          </Dropdown>
        </li>
        <li>
          <MainButton
            onClick={() => {
              setAuthenticated(false);
              localStorage.removeItem("token");
            }}
          >
            logout
          </MainButton>
        </li>
      </ul>
    </StyleSideBar>
  );
};

export default SideBar;

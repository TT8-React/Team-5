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

        <li>
          <Link to="/">Company details</Link>
        </li>
        <li>
          <Dropdown title="Report" width="200px" border="none" padding="0">
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
          <Dropdown title="Analytics" width="200px" border="none" padding="0">
            <ul>
              <li>
                <Link to="/Home/Enviroment">Environment</Link>
              </li>
              <li>
                <Link to="/Home/Social">Social</Link>
              </li>
              <li>
                <Link to="/Home/Governance">Governance</Link>
              </li>
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

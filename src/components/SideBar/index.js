import React from "react";
import Dropdown from "./DropDown";
import { StyleSideBar } from "./Style";
import Logo from "../Logo"
const SideBar = () => {
  return (
    <StyleSideBar>
      <Logo body="LOGO HERE"/>
      <ul>
        <li>Dashboard</li>
        <li>Company details</li>
        <li>
          <Dropdown title="Report">
            <ul>
              <li>My Report</li>
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
      </ul>
    </StyleSideBar>
  );
};

export default SideBar;

import React from "react";
import SideBar from "../../components/SideBar";
import Header from "../../components/Header";
import { StyledTableCon } from "./style";
import Graph from "../../images/Graph.png";
import Chart from "../../images/Chart.png";
// import ImageInput from "../../imageinpu";
// import StyledTablecon from "./style";

function Governance() {
  return (
    <div>
      <StyledTableCon>
        <SideBar />

        <div class="ccon">
          <Header />
          <div class="buttcon">
            <div className="graph-con">
              <img src={Graph} className="graph" />
              <img src={Graph} className="graph" />
            </div>
            <img src={Chart} className="chart" />
          </div>
        </div>
      </StyledTableCon>
    </div>
  );
}

export default Governance;

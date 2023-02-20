import React from "react";
import TableRow from "../../components/tablerow";
import SideBar from "../../components/SideBar";
import Header from "../../components/Header";
import { StyledTable } from "./style";
import { StyledTableCon } from "./style";
import { MainButton } from "../../styled/styleComponent";
// import StyledTablecon from "./style";

function Table() {
  return (
    <div>
      <StyledTableCon>
        <SideBar />

        <div class="ccon">
          <Header />
          <div class="buttcon">
            <MainButton>back</MainButton>

            <StyledTable>
              <thead>
                <td>report 1</td>
                <td>report 2</td>
                <td>report 3</td>
                <td>report 4</td>
                <td>report 5</td>
                <td>report 6</td>
                <td>report 7</td>
                <td>action</td>
              </thead>
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
            </StyledTable>
            <p class="pp">
              My report - Admin will get a list of created reports.
            </p>
          </div>
        </div>
      </StyledTableCon>
    </div>
  );
}

export default Table;

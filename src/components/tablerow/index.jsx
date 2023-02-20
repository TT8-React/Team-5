import React from "react";
import { StyledRow } from "./style";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

function TableRow() {
  return (
    <StyledRow>
      <td>Lorem, ipsum </td>
      <td>Lorem, ipsum </td>
      <td>Lorem, ipsum </td>
      <td>Lorem, ipsum </td>
      <td>Lorem, ipsum </td>
      <td>Lorem, ipsum </td>
      <td>Lorem, ipsum </td>
      <td>
        <div className="iconcon">
          <FaEdit />
          <FaTrashAlt className="trash" />
        </div>
      </td>
    </StyledRow>
  );
}

export default TableRow;

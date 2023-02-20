// import React from "react";
import styled from "styled-components";

export const StyledTable = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
  width: 95%;

  height: 30vh;
  margin-bottom: 160px;

  thead {
    text-align: center;
    background-color: #efefef;
    padding: 4em;
    height: 20%;
    td {
      border: 1px solid black;
    }
  }
`;

export const StyledTableCon = styled.div`
  display: flex;
  width: 100vw;
  .ccon{
    // width:100%;
    display flex;
    flex-direction: column;
    align-items: end;

    button{
      width: fit-content;

    }
    .pp{
      align-self: center;
      color: red;
    }
    .buttcon{
      display: flex;
      flex-direction: column;
      align-items: end;
      padding: 20px 50px 0px 0px;
      height: 100%;
      justify-content: space-around;
      width:100%;
  
    }
  }
 
`;

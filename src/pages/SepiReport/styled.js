import styled from "styled-components";

export const SepiReportStyle = styled.div`
  padding: 40px;
  display: flex;
  gap: 20px;

  ul {
    list-style: none;
    padding: 10px;
    font-weight: 700;
    font-size: 12px;
    li {
      margin-bottom: 15px;
    }
    .item {
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #000000;
      margin-left: 60px;
      background-color: #ededed;
      margin: 35px 0 35px 60px;
    }
  }

  table {
    border-color: #000000;
    border-collapse: collapse;
    width: 90%;
    height: 584px;
    tr {
      td:first-of-type {
        width: 15%;
        padding: 10px;
      }
      td:last-of-type {
        width: 120px;
        padding-left: 10px;
      }
    }
    td {
      border: 1px solid black;
    }
  }
`;

export const Back = styled.div`
  padding: 20px 40px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

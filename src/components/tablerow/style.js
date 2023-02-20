import styled from "styled-components";

export const StyledRow = styled.tr`
  padding: 4em;
  td {
    border: 1px solid black;
    text-align: center;
    width: 10%;
  }
  .trash {
    color: red;
  }
  .iconcon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 10px;
    height: 100%;
  }
`;

import styled from "styled-components";

export const DropdownStyle = styled.div`
  width: 200px;
  .titleDropDown {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: #000000;
    }
  }
  ul {
    li {
      margin-left: 18px;
    }
  }
`;
export const StyledArrow = styled.div`
  transform: ${({ open }) => (open ? "rotate(360deg)" : "rotate(270deg)")};
  transition: 0.5s;
`;
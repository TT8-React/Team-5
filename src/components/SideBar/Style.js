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
export const StyleSideBar = styled.div`
  background-color: #efefef;
  width: 270px;
  height: 100vh;
  padding: 41px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 92px;
  ul {
    li {
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: #000000;
      list-style: none;
      margin-top: 20px;
    }
  }
`;

import styled from "styled-components";
import { MainButton, StyledButtonBox } from "../../styled/styleComponent";
export const StyledSection = styled.section`
  ${StyledButtonBox} {
    margin-right: 50px;
    border-bottom: 1px solid #000000;
  }
  ${MainButton} {
    &.mt-100 {
      margin: auto;
      margin-top: 100px;
    }
  }
`;
export const StyledForm = styled.form`
  padding: 50px 61px 50px 36px;
  display: flex;
  flex-direction: column;
`;
export const StyledInputsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

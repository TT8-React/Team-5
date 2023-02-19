import React from "react";
import Input from "../../components/InputBox";
import Layout from "../../components/Layout/Layout";
import { MainButton, StyledButtonBox } from "../../styled/styleComponent";
import {
  StyledForm,
  StyledInputsContainer,
  StyledSection,
} from "../ProfileDetails/Styled";

import { myReport } from "../../mock/myReport";

function MyReport() {
  return (
    <Layout title="My Report">
      <StyledSection>
        <StyledButtonBox>
          <MainButton>View Report</MainButton>
        </StyledButtonBox>
        <StyledForm>
          <StyledInputsContainer>
            {myReport.map((item) => {
              return (
                <Input
                  key={item.key}
                  id={item.id}
                  label={item.label}
                  type={item.type}
                  placeholder={item.placeholder}
                />
              );
            })}
          </StyledInputsContainer>
          <MainButton type="submit" className="mt-100">
            Submit
          </MainButton>
        </StyledForm>
      </StyledSection>
    </Layout>
  );
}

export default MyReport;

import React from "react";
import Input from "../../components/InputBox";
import Layout from "../../components/Layout/Layout";
import { MainButton, StyledButtonBox } from "../../styled/styleComponent";
import { StyledForm, StyledInputsContainer, StyledSection } from "./Styled";

import { profileDetails } from "../../mock/profileDetails";

function ProfileDetails() {
  return (
    <Layout title="Profile details">
      <StyledSection>
        <StyledButtonBox>
          <MainButton>View details</MainButton>
        </StyledButtonBox>
        <StyledForm>
          <StyledInputsContainer>
            {profileDetails.map((item) => {
              return (
                <Input
                  key={item.id}
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

export default ProfileDetails;

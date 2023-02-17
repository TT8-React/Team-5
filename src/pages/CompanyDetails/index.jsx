import React from "react";
// import  local Styled Components
import {
  StyledCompanyDetailsPageBody,
  StyledDetailInfo,
  StyledDetailName,
  StyledDetailsBox,
  StyledDetailsPage,
} from "./Styled";

// import  Global Styled Components
import {
  DashCard,
  MainButton,
  StyledButtonBox,
} from "../../styled/styleComponent";

// import mock
import { details } from "../../mock/companyDetails";

// import the Layout of pages
import Layout from "../../components/Layout/Layout";

function CompanyDetails() {
  return (
    <Layout title="Company details">
      <StyledCompanyDetailsPageBody>
        <StyledButtonBox>
          <MainButton>Edit company details</MainButton>
        </StyledButtonBox>
        <DashCard>
          <StyledDetailsPage>
            {details.map((detail) => {
              return (
                <StyledDetailsBox key={detail.id}>
                  <StyledDetailName>{detail.detailName}</StyledDetailName>
                  <StyledDetailInfo>{detail.detailInfo}</StyledDetailInfo>
                </StyledDetailsBox>
              );
            })}
          </StyledDetailsPage>
        </DashCard>
      </StyledCompanyDetailsPageBody>
    </Layout>
  );
}

export default CompanyDetails;

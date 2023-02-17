import React from "react";
import {
  StyledCompanyDetailsPageBody,
  StyledDetailInfo,
  StyledDetailName,
  StyledDetailsBox,
  StyledDetailsPage,
} from "./StyledCompanyDetails";
import {
  DashCard,
  MainButton,
  StyledButtonBox,
} from "../../styled/styleComponent";
import Layout from "../../components/Layout/Layout";
function CompanyDetails() {
  const details = [
    { id: 0, detailName: "name", detailInfo: "Lorem ipsum" },
    { id: 1, detailName: "test 1", detailInfo: "Lorem ipsum" },
    { id: 2, detailName: "test 2", detailInfo: "Lorem ipsum" },
    { id: 3, detailName: "test 3", detailInfo: "Lorem ipsum" },
    { id: 4, detailName: "test 4", detailInfo: "Lorem ipsum" },
    { id: 5, detailName: "test 5", detailInfo: "Lorem ipsum" },
    { id: 6, detailName: "test 6", detailInfo: "Lorem ipsum" },
  ];
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

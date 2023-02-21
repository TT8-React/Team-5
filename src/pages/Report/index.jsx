import React from "react";
import Layout from "../../components/Layout/Layout";
import ReportType from "../../components/ReportType";
import { MainButton, StyledButtonBox } from "../../styled/styleComponent";
import { StyledSection } from "../ProfileDetails/Styled";
import { StyedReportTypeBox } from "./style";
import CustomPopup from "../../components/CustomPopup";

function Report() {
  return (
    <Layout title="Report">
      <StyledSection>
        <StyledButtonBox>
          <MainButton>Create report</MainButton>
        </StyledButtonBox>

        <StyedReportTypeBox>
          <CustomPopup>
            <ReportType title="SEBI report" />
          </CustomPopup>

          <CustomPopup>
            <ReportType title="GRI report" />
          </CustomPopup>

          <CustomPopup>
            <ReportType title="Customize report" />
          </CustomPopup>
        </StyedReportTypeBox>
      </StyledSection>
    </Layout>
  );
}

export default Report;

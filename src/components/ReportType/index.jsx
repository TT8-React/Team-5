import React from "react";
import {
  StyledReportType,
  StyledReportTypeInsideBox,
  StyledReportTypeText,
} from "./style";

function ReportType(props) {
  return (
    <StyledReportType>
      <StyledReportTypeInsideBox></StyledReportTypeInsideBox>
      <StyledReportTypeText>{props.title}</StyledReportTypeText>
    </StyledReportType>
  );
}

export default ReportType;

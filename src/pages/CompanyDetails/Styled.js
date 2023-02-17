import styled from "styled-components";

export const StyledDetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 5px;
`;
export const StyledCompanyDetailsPageBody = styled.div`
  max-width: 1142px;
  margin: auto;
  margin-bottom: 100px;
`;
export const StyledDetailsPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
  padding: 34px 38px 31px;
`;
export const StyledDetailName = styled.p`
  font-weight: 400;
  font-size: 15px;
  color: #000000;
`;
export const StyledDetailInfo = styled(StyledDetailName)`
  font-weight: 600;
  font-size: 18px;
`;

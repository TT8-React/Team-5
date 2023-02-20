import styled from "styled-components";
import Popup from "reactjs-popup";
export const StyedReportTypeBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 35px;
  gap: 58px;
  margin-left: 43px;
`;
export const StyedModal = styled.div`
  font-size: 12px;
  background-color: #fff;
  box-shadow: 0px 7px 35px rgb(0 0 0 / 25%);
  border-radius: 15px;
  width: 496px;
  height: 226px;
  width: 696px;
  height: 326px;
`;
export const StyledPopup = styled(Popup)`
  &-overlay {
    background: rgba(0, 0, 0, 0.5);
  }
`;
export const StyedModalHeader = styled.div`
  width: 100%;
  border-bottom: 1px solid #000000;
  font-size: 18px;
  padding: 5px;
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
  color: #000000;
  padding: 17px 0 15px 35px;
`;
export const StyedModalContent = styled.div`
  width: 100%;
  padding: 10px 47px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
`;
export const StyedModalActions = styled.div`
  width: 100%;
  margin: auto;
  margin-top: 50px;
  text-align: center;
`;
export const StyedOpenModal = styled.button`
  border: none;
  cursor: pointer;
`;
export const StyedModalClose = styled.button`
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 20px;
  background: transparent;
  font-size: 24px;
  border: none;
  color: #000;
`;

import React from "react";
import { Link } from "react-router-dom";
import {
  StyedModal,
  StyedModalActions,
  StyedModalClose,
  StyedModalContent,
  StyedModalHeader,
  StyedOpenModal,
  StyledPopup,
} from "../../pages/Report/style";
import { MainButton } from "../../styled/styleComponent";
import InputBox from "../InputBox";

function CustomPopup({ children }) {
  return (
    <div>
      <StyledPopup
        trigger={<StyedOpenModal className="button">{children}</StyedOpenModal>}
        modal
        nested
      >
        {(close) => (
          <StyedModal className="modal">
            <StyedModalClose className="close" onClick={close}>
              &times;
            </StyedModalClose>
            <StyedModalHeader className="header">
              Customize report
            </StyedModalHeader>
            <StyedModalContent className="content">
              <InputBox label="From" type="date" />
              <InputBox label="To" type="date" />
            </StyedModalContent>
            <StyedModalActions className="actions">
              <Link>
                <MainButton>Continue for next step</MainButton>
              </Link>
            </StyedModalActions>
          </StyedModal>
        )}
      </StyledPopup>
    </div>
  );
}

export default CustomPopup;

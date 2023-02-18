import React from "react";
// import  Global Styled Components

import {
  Title,
  MainButton,
  DashCard,
  Container,
  SignCard,
} from "../../styled/styleComponent";

// import  Global Local Components

import { VerifiedStyled } from "./styled";

// import  Images

import VerifiedImg from "../../images/Verified.png";

const Verified = () => {
  return (
    <Container>

      <VerifiedStyled>

        <SignCard className="card">

          <Title>Verified </Title>

          <div>
            <img src={VerifiedImg} />
          </div>

          <MainButton>NEXT</MainButton>

        </SignCard>

      </VerifiedStyled>
      
    </Container>
  );
};

export default Verified;


// import  Global Styled Components

import {
  Container,
  MainButton,
  SignCard,
  Title,
} from "../../styled/styleComponent";

// import  Local Styled Components

import { VerificationStyled } from "./styled";
const Verification = () => {
  return (
    <Container>

      <VerificationStyled>

        <SignCard className="card">

          <Title>Verification</Title>

          <ul>

            <li>
              You are sing up with this account please verify by this link
              <span>www.loremipsum.com</span>
            </li>

          </ul>

          <MainButton>SUBMIT</MainButton>

        </SignCard>

      </VerificationStyled>
    </Container>
  );
};

export default Verification;

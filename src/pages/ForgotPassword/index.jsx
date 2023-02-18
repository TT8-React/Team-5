
// import  Global Styled Components

import {
  Container,
  MainButton,
  SignCard,
  Title,
} from "../../styled/styleComponent";

// import  local Styled Components

import { ForgotPasswordStyled } from "./styled";

//import component Input from components
import Input from "../../components/InputBox";

const ForgotPassword = () => {
  return (
    <Container>
      <ForgotPasswordStyled>
        
          <SignCard className="card">

            <Title>FORGOT PASSWORD</Title>

            <form>

              <Input
                id="email"
                type="text"
                placeholder="Enter Email ID"
                label="Email ID"
              />

              <MainButton>SUBMIT</MainButton>

            </form>
          </SignCard>
      </ForgotPasswordStyled>
    </Container>
  );
};

export default ForgotPassword;

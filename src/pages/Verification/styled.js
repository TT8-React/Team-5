import styled from "styled-components";

export const VerificationStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .card {
    width: 522px;
    height: 412px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 100px auto;

    h2 {
      margin: 30px auto 45px;
    }

    ul {
      margin-left: 60px;
      list-style-position: outside;

      li {
        font-weight: 400;
        font-size: 20px;
        line-height: 39px;
        color: #000000;

        span {
          color: #ff0000;
          margin-left: 10px;
        }

      }
    }

    li::marker {
      color: #7e7e7e;
      font-size: 30px;
    }
  }
  
  button {
    display: block;
    margin: 75px auto 65px;
  }
`;

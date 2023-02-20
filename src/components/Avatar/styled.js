import styled from "styled-components";

export const StyleAvatar = styled.div`
 ${props => props.Open&&
  `
    ::after{
    content:"";
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:#00000052
  }
  `
  }
  .imgBox {
    position: relative;
    z-index:99;
    img {
      width: 57px;
      height: 57px;
      border-radius: 50%;
    }
    .profileDetails {
      position: absolute;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      color: #000000;
      width: 141px;
      height: 59px;
      background: #ffffff;
      right: -5%;
      top: 115%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      z-index: 10;

      &::before {
        position: absolute;
        content: "";
        border-width: 5px 5px 5px 5px;
        border-style: solid;
        border-color: transparent transparent #ffffff transparent;
        width: 0;
        height: 0;
        top: -15%;
        right: 20%;
        z-index: -1;
      }
    }
  }
`;

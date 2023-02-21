import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 30vw;
  height: 7vh;

  border: 1px solid black;
  border-radius: 100px;
  display: flex;
  align-items: center;
  background-color: #efefef;
  & label {
    display: flex;
    align-items: center;
    gap: 15px;
    width: 100%;
    height: 100%;
    // display: contents;
    // padding-top: 14px;
    .upIcon {
      font-size: 30px;
    }
  }

  & input {
    // position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    width: 30px;
  }
  & div {
    height: 10px;
    width: 10px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    // z-index: 9999;
    font-size: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
  & img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    font-size: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    object-fit: contain;
  }
`;

export const StyledTableCon = styled.div`
  display: flex;
  width: 100vw;
  .sc-iBYQkv{
    height: 30vh
  }
  .ccon{
    width:100%;
    display flex;
    flex-direction: column;
    align-items: end;

    .wrapperCon{
      display: flex;
      gap: 70px;
      align-items: center;
      .sub{
         height:40px;
         padding: 10px;
         text-align: center;
         font-size: 15px;
       }

    }

    button{
      width: fit-content;
      border:none;
      
    }
    .pp{
      align-self: center;
      color: red;
    }
    .cTzEmf{
      width:81.56vw;
    }
    .buttcon{
      display: flex;
      flex-direction: column;
      
      padding: 20px 0px 0px 50px;
      height: 100%;
      gap:30px;
      // justify-content: space-around;
      width:100%;
      button{
        font-size: 25px
      }
      .switch{
        margin-left: 10%;
        width:70%;
        display:flex;
        border-radius:10px;
        border: 1px splid white;
        .active{
          background: #d9d9d9;
        }
        .left{
          border-radius:5px 0px 0px 5px;
        }
        .right{
          border-radius:0px 5px 5px 0px;

        }
      }
      .cardsCon{
        display: flex;
        justify-content: space-around;
        width: 100%;
        .card{
          width: 30%;
          .cardsText{
            height: 20%;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid black;
            width: 100%;
            padding: 20px;
            // margin-left: -30px;
            .ico{
              font-size: 25px;
            }
          }
          .bbnn{
            height:50vh;
          }
        }
        .butts{
          display: flex;
          flex-direction: column;
        justify-content: space-around;
          
        }
      }
  
    }
  }
 
`;
export const StyleSwitchButton = styled.button`
  width: 50% !important;
  height: 64px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px !important;
`;

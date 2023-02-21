import styled from "styled-components";

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

    button{
      width: fit-content;
    }
    .pp{
      align-self: center;
      color: red;
    }
    .cTzEmf{
      width:81.63vw;
    }
    .buttcon{
      display: flex;
      flex-direction: column;
      align-items: end;
      padding: 20px 50px 0px 0px;
      height: 100%;
      justify-content: space-around;
      width:100%;
      button{
        font-size: 25px
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

import styled from "styled-components";

export const LogInStyled = styled.div`
        display: flex;
        align-items:center;
        justify-content:center;
        .card{
            margin-top: 80px;
            width: 522px;
            height: 568px;
            display: flex;
            align-items:center;
            justify-content:center;
            flex-direction: column;
            padding:30px;
            h2{
                margin:60px 0;
            }
            input{
                width:360px;
                height: 48px;
            }
            
            button{
                display: block;
                margin:84px auto 10px;
            }
            form{
                margin-bottom: 42px;
            }
            .password{
                position:relative;
                a{
                    position:absolute;
                    right:0;
                    color:black;
                }    
            }
    }
    
`
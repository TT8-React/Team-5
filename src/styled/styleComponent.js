import styled from 'styled-components';

export const Container = styled.div `
    padding: 0 15px;
    margin: 0 auto;
/* Small */
@media (min-width: 768px) {
    width: 750px;
}
/* Medium */
@media (min-width: 992px) {
    width: 970px;
}
/* Large */
@media (min-width: 1200px) {
    width: 1170px;
}
`;
export const MainButton = styled.button `
    background: #000000;
    border-radius: 5px;
    color: #FFFFFF;
    padding:10.5px 16px; 
    cursor: pointer;
    border: none;
`

export const SignCard = styled.div`
    background: #F8F8F8;
    border: 1px solid #000000;
    border-radius: 30px;
`
export const Title = styled.h2`
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    color: #000000;
`
export const DashCard = styled(SignCard)`
    border-color: #969696;
`
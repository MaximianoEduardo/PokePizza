import styled from 'styled-components';

export const HeaderDiv = styled.div`
    display: flex;
    align-items: center;
    padding:  15px;
    background: #3c5aa6;
    min-height: 100px;
    width: 100%;
    justify-content:  space-between;
    >img{
        max-width: 135px;
    }
`;

export const Input = styled.input`
    background: #fff;
    border: 2px solid #ffcb05;
    max-width: 150px;
    border-radius: 3px;
    padding-left: 15px;
    height:  35px;
    color: #000;
    font-family: 'Ubuntu';
`
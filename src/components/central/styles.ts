import styled from 'styled-components';

export const CentralDiv = styled.div`
    background: #ffcb05;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding:  20px;
`;

export const Title = styled.h2`
    font-size: 17px;
    color: #2a75bb;
    font-family: 'Ubuntu';
`

export const Description = styled.span`
    display: flex;
    font-size:  16px;
    color: #2a75bb;
    font-weight: bold;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    font-family: 'Ubuntu';
    padding: 0 40px;
    margin-top: 15px;
`
export const Image = styled.img`
    width: 100%;
    max-width: 70px;
    cursor: pointer;
    margin-left: 15px
`

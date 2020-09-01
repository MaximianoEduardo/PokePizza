import styled from 'styled-components';

export const Products = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 90vw;
    height: auto;
    margin: 20px 0;
    border-radius: 15px;
    padding: 18px;
    background: #3c5aa6;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 250px;
    min-height: 350px;
    position: relative;
    background: #fff;
    border-radius: 15px;
    margin-bottom: 15px;
    > img {
        border: 1px solid #000;
        border-bottom-right-radius: 15px;
        border-bottom-left-radius: 15px;
    }

`
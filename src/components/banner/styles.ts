import styled from 'styled-components';

export const BannerDiv = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
`;

export const ButtonOrder = styled.button`
    width:  200px;
    height: 45px;
    color: #fff;
    border-radius: 25px;
    background:  #FF1F1F;
    opacity: 52%;
    font-family: 'Ubuntu';
    font-size: 17px;
    margin-top: 24px;
    transition:   0.5;
    &:hover{
        opacity: 1;
        background: #3c5aa6;
    }
`

export const Title = styled.h1`
    font-size: 17px;
    color: #2a75bb;
    font-family: 'Ubuntu';

`

export const  ImageBanner = styled.img`
    object-fit: cover;
    max-width: 100vw;
    padding:  18px
`
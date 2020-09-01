import styled from 'styled-components';

export const Categorias = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    > h2 {
        font-size: 16px;
        text-transform: capitalize;
        padding: 15px 0;
    }
    .categories-wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 0 8px;
        > span{
            display: flex;
            align-items: center;
            border: 2px solid #3c5aa6;
            padding: 8px;
            height: 35px;
            border-radius: 9px;
            color: #fff;
            background: #3c5aa6;
            &:hover, .active{
                background:#ffcb05
            }
        }
    }

`;

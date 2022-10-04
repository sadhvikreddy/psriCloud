import styled from "styled-components";

export const CardGrid = styled.div`
    display: grid;
    grid-template-columns: 300px 300px 300px;
    grid-row-gap: 2px;
    grid-column-gap: 2px;
    justify-content: center;
    grid-gap: 2px;
    padding-top: 50px;

    @media screen and (max-width: 720px){
        display: grid;
        grid-template-columns: 300px;
        grid-row-gap: 1px;
        grid-column-gap: 1px;
        justify-content: center;
        grid-gap: 1px;
        padding-top: 50px;

    }
`

export const CardWrapper = styled.div`
`

export const CardImg = styled.img`
    height: 300px;
    border-radius: 10px;
`
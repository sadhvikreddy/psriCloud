import styled from 'styled-components'


export const Container = styled.div`
    padding-Top: 75x;
    padding-bottom: 75px;
    font-family: 'Avenir Book';
    display: flex;
    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`
export const WholeContainer = styled.div`
    max-width: 100%;
    font-family: 'Avenir Book';
    background-color: rgba(0,0,0,0.7);
`

export const ServicesWrapper = styled.div`
    padding-bottom: 100px;
    font-family: 'Avenir Book';
    display: flex;

    @media screen and (max-width: 768px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`


export const Heading = styled.h1`
padding: 50px;
padding-bottom: 0px;
color: rgba(255,255,255,0.9);
text-align: right;

@media screen and (max-width: 768px){
    text-align: center;
    }
`

export const TextWrapper = styled.div`
    text-align: center;

    @media screen and (max-width: 768px){
        display: flex;
        align-items: center;
        justify-content: center;
        }
`

export const BodyText = styled.p`
    background: #ffdcb4;
    box-shadow: inset -10px -10px 22px #e6c6a2,
            inset 10px 10px 22px #fff2c6;

    padding: 30px;
    margin-top: 50px;

    text-align: justify;
    width: 80%;

/*
border-radius: 20px;
background: rgba(255,220,180,0.7);
box-shadow: inset 20px 20px 56px #d9bb99,
            inset -20px -20px 56px #fffdcf;*/
`

export const MainListHeading = styled.h1`
padding-bottom: 50px;
padding-left: 75px;
color: rgba(255,255,255,0.9);
max-width: 120px;
text-align: right;

@media screen and (max-width: 768px){
    max-width: none;
    text-align: center;
    }
`

export const ListWrapper = styled.div`
    display: flex;
    padding: 50px;
    padding-top: 0px;

    @media screen and (max-width: 768px){
       flex-direction: column;
        justify-content: center;
    }
`

export const MainList = styled.ul`
    list-style: none;
    text-decoration: none;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 10px;
    padding: 5px;
    max-width: 300px;

    @media screen and (max-width: 768px){
        grid-template-columns: auto;
    }
`

export const MainList1 = styled.ul`
    list-style: none;
    text-decoration: none;
    width: max-content;
    display: grid;
    grid-template-columns: auto auto auto;

    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        padding-top: 15px;

    }
`

export const MainItem = styled.li`
text-decoration: none;
background: rgba(255,220,180,0.5);
box-shadow: inset 20px 20px 56px #d9bb99,
            inset -20px -20px 56px #fffdcf;
text-align: center;
padding: 25px;
`
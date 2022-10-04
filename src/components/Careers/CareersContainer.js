import styled from 'styled-components'

export const Container = styled.div`
    background-color: rgba(0,0,0,0.7);
    overflow-y: clip;
    color:rgba(255,220,180,0.8);
    height:auto;
    max-width: 100%;
`

export const ContentContainer = styled.div`
    padding: 50px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const TogetherWrapper = styled.div`
    padding-top: 25px;
    max-width: 800px;
    text-align: center;
    display: flex;
    flex-direction:column;
`

export const TogetherTag = styled.h2`
    color: rgba(255,255,255,0.9);
    text-align: center;
    border-bottom: 1px dashed rgba(255,255,255,0.9);
    padding: 20px;
    padding-top: 0;
`

export const TogetherBody = styled.p`
    padding-top: 25px;
    text-align: center;
    justify-content: center;
    font-size: 18px
`

export const Benefits = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    text-align: center;
    grid-gap:60px;

    @media screen and (max-width:768px){
        grid-template-columns: auto auto;
    }

    @media screen and (max-width:460px){
        grid-template-columns: auto;
    }
`

export const BenefitsWrapper = styled.div`
  //  max-width: 1000px;
    text-align: center;
    align-content: center;
    display: flex;
    justify-content: center;
    padding-top: 150px;
    padding-bottom: 50px;
`

export const BenefitsItem = styled.div``

export const Title = styled.h3`
    font-size: 25px;
    max-width: 200px;

    @media screen and (max-width:768px){
        font-size: 25px;
    }

    @media screen and (max-width:450px){   
        font-size: 25px;
    }
`

export const Logo = styled.h3`
    color: rgba(255,255,255,0.9);
    font-size: 100px;

    @media screen and (max-width:768px){
        font-size: 75px;
    }
    @media screen and (max-width:450px){
        font-size: 55px;
    }
`
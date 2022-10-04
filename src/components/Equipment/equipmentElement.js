import styled from 'styled-components'

export const Card = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in;
    transform: scale(0.7,0.7);

    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        transform: scale(1,1);
        margin:100px;
    }
`
export const CardImg = styled.img`
    height: 200px;
    width: auto;

    transition: all 0.3s ease-in;

    :hover{
        transform: scale(1.2,1.2);
    }

    @media screen and (max-width: 768px){
        height: 100px;
        width: auto;
    }
`

export const CardImg1 = styled.img`
    height: 200px;
    width: auto;
    transform: scale(1.3,1.3);

    transition: all 0.3s ease-in;

    :hover{
        transform: scale(1.5,1.5);
    }
    @media screen and (max-width: 768px){
        height: 100px;
        width: auto;
    }
`
export const CardImg2 = styled.img`
    height: 200px;
    width: auto;
    transform: scale(1.2,1.2);

    transition: all 0.3s ease-in;

    :hover{
        transform: scale(1.4,1.4);
    }

    @media screen and (max-width: 768px){
        height: 100px;
        width: auto;
    }
`
export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px;
    color: white;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    backdrop-filter: blur(9px);
    background-color: rgba(255,220,180, 0.146);
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
    border: 1px rgba(255,255,255,0.4) solid;
    border-bottom: 1px rgba(40,40,40,0.35) solid;
    border-right: 1px rgba(40,40,40,0.35) solid;

:hover{
  box-shadow: 0 0 11px rgba(255,220,180,0.9);
  border:none 

}
`


export const CardData = styled.div`
    display: flex;
    padding-top: 25px;
    color:rgba(255,220,180,1);

`
export const CardTitle = styled.h4`
     font-size: 25px;
     color: rgba(255,255,255,0.9);
`
export const CardQuality = styled.h4`
background: linear-gradient(145deg, #514747, #373131);
border-radius: 50%;
box-shadow: inset 9.91px 9.91px 15px #3E3737, inset -9.91px -9.91px 15px #4A4141;
margin-left: 25px;
font-size: 20px;
padding: 10px;
`
export const Card1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`
export const CardWrapper1 = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: max-content max-content max-content max-content;
    align-items: center;
    grid-gap: 1px;
    margin: 30px;
    
    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
    }
`
export const CardData1 = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px;
    color: white;
    justify-content: center;
    align-items: center;
    border-radius: 1px;
    backdrop-filter: blur(9px);
    background-color: rgba(255,220,180, 0.146);
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
    border: 1px rgba(255,255,255,0.4) solid;
    border-bottom: 1px rgba(40,40,40,0.35) solid;
    border-right: 1px rgba(40,40,40,0.35) solid;
`

export const CardTitle1 = styled.h4`
        color: rgba(255,220,180,1);
`
export const CardQuality1 = styled.h4`
    color:rgba(255,220,180,1);
`
export const CardHeading = styled.h2`
    padding:30px;
    color:rgba(255,255,255,0.9);
    font-size: xx-large
`
export const DoneBtn = styled.button`
    margin: auto;
    margin-top: 10px;
    padding: 5px 20px;
    background: rgba(255,220,180);
    color: rgba(0,0,0,0.7);
    font-size: large;
    border-top: 1px solid rgba(255,255,255,0.1);
    border-bottom: 1px solid rgba(255,255,255,0.1);
    z-index: 1;
    transition: 0.5%;
    cursor: pointer;

    :hover{
      box-shadow: 0 15px 35px rgba(0,0,0,0.8);
    }
`

export const CardWrapper11 = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    grid-gap: 1px;
    margin-bottom: 30px;
    transform: scale(0.9,0.9);

    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        transform: scale(1,1);
    }
`
export const CardWrapper111 = styled.div`
    display: grid;
    grid-template-columns: auto;
    align-items: center;
    justify-content: center;
    gap: 1px;
    margin-bottom: 30px;
    //transform: scale(0.8,0.8);

    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        transform: scale(1,1);
    }
`

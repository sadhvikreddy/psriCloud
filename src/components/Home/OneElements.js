import styled from 'styled-components'

export const CarContainer = styled.div`
    background-color: rgba(0,0,0,0.7);
    background: linear-gradient(310deg,  rgba(255,220,180,0.4) 10%, rgba(0,0,0,0.7) 60%, rgba(255,255,255,0.3)) 99%;
    height: 89vh;
    overflow-y: clip;
    padding-top: 120px;

    @media screen and (max-width: 768px){
      //  padding-top: 150px
    }
`

export const CarWrapper = styled.div`
    @media screen and (max-width: 768px){
        display: none;
        padding-top: 30px
    }
`

export const CarWrapper1 = styled.div`
    display: none;
    @media screen and (max-width: 768px){
        display: block;
        padding-top: 30px
    }
`

export const ImageHolder = styled.img`
    height: 75vh;
    width: auto;
    border: 3px solid rgba(255,229,180,0.7);
    object-fit: fill;

    @media screen and (max-width: 768px){
        width: auto;
        height: 65vh;
        object-fit: cover;

    }

    @media screen and (max-width: 468px){
        width: auto;
        height: 45vh;
        object-fit: cover;

    }
`

export const MySignWrapper = styled.a`
    position: fixed;
    bottom: 5px;
    right: 10px;
`

export const Sign = styled.img`
    width: auto;
    height: 40px;
    box-shadow: 8px 7px 15px -7px rgba(0,0,0,0.5);
    -webkit-box-shadow: 8px 7px 15px -7px rgba(0,0,0,0.5);
    -moz-box-shadow: 8px 7px 15px -7px rgba(0,0,0,0.5);

    @media screen and (max-width:1080px) {
        height:40px
    }
`
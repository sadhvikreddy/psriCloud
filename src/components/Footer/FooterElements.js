import styled from 'styled-components';


export const FooterContainer = styled.footer`
    background-color: #101522;
    max-width: 100%;
`


export const FooterContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items:center;
    margin: 0 auto;

    @media screen and (max-width: 1080px){
        flex-direction: column;
    }

`

export const Hline = styled.div`
    border-left: 1px solid #dddfdf;
    height: 100px;

    @media screen and (max-width: 1080px) {
        border-left: none;
        border-bottom: 1px solid #dddfdf;
        height: 0px;
        width: 50px;

    }
`



export const PMlogo = styled.img`
    height: 90px;
    width: auto;
    padding: 50px;
    align-self: center;

    @media screen and (max-width: 720px){
        height: 80px;
        width: auto;
        padding: 30px;
    }
`

export const SocialCont = styled.a`
cursor: pointer;
`

export const SocialWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 50px;

    @media screen and (max-width: 1080px){
        padding: 30px
    }
`

export const SocialIcon = styled.img`
   height: 50px;
    width: 50px;
`
export const MySignWrapper = styled.a`
    cursor: pointer;
    padding-left: 15px;
    @media screen and (max-width:1080px) {
    padding-bottom: 15px;
    }
`

export const Sign = styled.img`
    width: auto;
    height: 40px;
    box-shadow: 8px 7px 15px -7px rgba(0,0,0,0.5);
    -webkit-box-shadow: 8px 7px 15px -7px rgba(0,0,0,0.5);
    -moz-box-shadow: 8px 7px 15px -7px rgba(0,0,0,0.5);
`

export const ContactUS = styled.div`
    display: flex;
    color: #fff;
    text-align: justify;
    padding: 30px;
    align-items: center;
    justify-content: center;
    @media screen and (max-width:768px){
        flex-direction: column;
        
    }
` 

export const TextW = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    padding:10px;
    color: white;
    text-decoration: none;
    max-width: 75%;
`

export const Texta = styled.p`
    color: rgba(255,0,0,0.7)
`
export const Textb = styled.p`
    padding-left: 10px;
    text-align: left;
`
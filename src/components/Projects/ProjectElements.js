import styled from 'styled-components'

export const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 150px;
    background-color: rgba(0,0,0,0.7);
    font-family: 'Avenir Book';
    z-index: 0;
    max-width: 100%;


`

export const HeaderHolder = styled.div`
    position: relative;
    top:0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
`

export const HeaderText = styled.h1`
position: absolute;
z-index: 999;
font-size: 75px;
color: rgba(255,255,255,0.9);
//text-shadow: 4px 2px 5px rgb(0,0,10,0.5)
text-shadow: 0px 3px 3px rgb(0,0,0);
backdrop-filter: blur(2px);
padding: 20px;
width: 82%;
text-align: center;
box-shadow: 0px 0px 6px rgba(255,220,180,0.6);

@media screen and (max-width: 768px){
        font-size:35px;
        width: 75%;
    }

    
`

export const HeaderImage = styled.img`
    width: 100%;
    height: 450px;
    object-fit: cover;
    z-index: 2;
`

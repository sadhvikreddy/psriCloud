import styled from 'styled-components';
import {
    Link as linkR
}
from 'react-router-dom'

export const Nav = styled.nav`
    background-color: rgba(0,0,0,0.7);
    height: 80px;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 768px){
        transition: 0.8s all ease;
        height: 100px;
    }
`


export const NavbarContainer = styled.div`
    display: flex;
 //   z-index:1;
    padding-left: 100px;

    @media screen and (max-width:768px){
        padding-left: 12px;
    }
`

export const NavLogoWrapper = styled(linkR)`
    display: flex;
    align-items: center;
    cursor: pointer;
`
export const NavLogo = styled.img`
    cursor: pointer;
    display: flex;
    height: 60px;
    width: auto;
    padding-top: 5px;

    @media screen and (max-width: 768px){
        height: 90px;
        width: auto;
    }
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
    //color: #192428;
    color: rgba(255,229,180,0.7);
    display:flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    cursor: pointer;
    font-size: 5rem;
    font-family: 'Avenir Book';
    padding-right: 24px;
    }
`

export const NavMenu =styled.ul`
    display: flex;
    padding-right: 100px;
    list-style: none;

    @media screen and (max-width: 768px) {
        display: none;

    }
`

export const NavItem = styled.li`
    justify-content: flex-end;
`

export const NavLinks = styled(linkR)`
    //color: #192428;
    color: rgba(255,229,180,0.7);
    display:flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    cursor: pointer;
    font-size: 1.4rem;
    font-family: 'Avenir Book';

    &:hover{
        padding-bottom: 0px;
        border-bottom: 2px solid rgba(255,229,180,0.7);
        //border-bottom: 2px solid #192428;
    }

    &.active{        
        padding-bottom: 0px;
       border-bottom: 2px solid rgba(255,229,180,0.7);
       // border-bottom: 2px solid #192428;
    }
`



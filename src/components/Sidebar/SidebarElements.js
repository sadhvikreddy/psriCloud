import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import { Link as linkS} from 'react-router-dom'

export const Sidebarcontainer = styled.aside`
    position:fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: rgba(255,220,180,0.9);
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')}; 
`



export const NavLogoWrapper = styled(linkS)`
    position: absolute;
    top:0;
    align-items: center;
    cursor: pointer;
    padding-left: 10px;
`
export const NavLogo = styled.img`
    cursor: pointer;
    display: flex;
    height: 10px;
    width: auto;
    padding-top: 5px;

    @media screen and (max-width: 768px){
        height: 90px;
        width: auto;
    }
`

export const CloseIcon = styled(MdClose)`
    color: #000;

    &:hover {
        color: whitesmoke
    }
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: #dddfdf;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 100px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(4, 60px)
    }
`

export const SidebarLink = styled(linkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #000;
    cursor: pointer;
    font-family: Oswald;

    &:hover {
        color: #fff
    }
`
import React from 'react'
import { MdMenu } from "react-icons/md";
import { 
    Nav,
    NavbarContainer,
    NavLogoWrapper,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks
 } from './NavbarElements'
 import psril from '../../data/THELOGO.png'

const Navbar = ({toggle}) => {

return (
            <>
                <Nav>
                    <NavbarContainer>
                        <NavLogoWrapper to="/"
                        >
                            <NavLogo src = {psril} type = 'img/png' />
                        </NavLogoWrapper>
                    </NavbarContainer>
                    <MobileIcon onClick = {toggle}>
                            <MdMenu />
                        </MobileIcon>
                    <NavMenu>
                            <NavItem
                            >
                                <NavLinks
                                    to = '/about'
                                >About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to = '/projects'
                                >Projects</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                    to = '/equipment'
                                >Equipment</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to = '/partners'
                                >Our Clients</NavLinks>
                            </NavItem>
                        </NavMenu>
                </Nav>
            </>
        )
}

export default Navbar

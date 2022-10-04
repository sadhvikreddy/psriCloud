import React from 'react'
import {
    Sidebarcontainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    NavLogo, NavLogoWrapper
}
from './SidebarElements'

import psril from '../../data/THELOGO.png'


const Sidebar = ({ isOpen, toggle}) => {
    return (
        <Sidebarcontainer isOpen = {isOpen} onClick = {toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/about" >
                        About
                    </SidebarLink>
                    <SidebarLink to="/projects" >
                        Projects
                    </SidebarLink>
                    <SidebarLink to="/equipment" >
                        Equipment
                    </SidebarLink>
                    <SidebarLink to="/partners" >
                       Our Clients
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
            <NavLogoWrapper to="/"
                        >
                <NavLogo src = {psril} type = 'img/png' />
            </NavLogoWrapper>
        </Sidebarcontainer>
    )
}

export default Sidebar

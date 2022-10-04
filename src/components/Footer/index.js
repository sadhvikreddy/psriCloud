import React from 'react'
import {
    FooterContainer,
    FooterContent,
    PMlogo,
    Hline,
    SocialWrapper,
    SocialCont,
    SocialIcon,
    MySignWrapper,
    Sign,
    ContactUS,
    Texta,
    Textb,
    TextW
}
from './FooterElements'

import logoo from '../../data/THELOGO.png'

import FbIcon from '../../data/facebook.png'
import IgIcon from '../../data/instagram.png'

import sign from '../../data/MySign.png'


const Footer = () => {
    return (
        <>
            <FooterContainer>
                <ContactUS>
                    <TextW href = 'mailto:psrinfrastructures@gmail.com?subject=Enquiry from Website'>
                    <Texta>Email:</Texta><Textb>psrinfrastructures@gmail.com</Textb></TextW>
                    <TextW href = 'tel:+919989804567'>
                    <Texta>Phone:</Texta><Textb> +91 99898 04567</Textb></TextW>
                    <TextW>
                    <Texta>Address:</Texta><Textb> 501, B-Block, dheeraj courts Apartment, Srinagar colony, Nellore,524004</Textb></TextW>
                </ContactUS>
                <FooterContent>
                    <PMlogo  src = { logoo } type = 'img/png' /> 
                    <Hline></Hline>
                    <SocialWrapper>
                        <SocialCont  href = "https://www.facebook.com/Psrinfrastructures/">
                            <SocialIcon src = {FbIcon}  type = 'img/png'/>
                        </SocialCont>
                        <SocialCont  href = "https://www.instagram.com/infraforlife/?hl=en">
                            <SocialIcon src = {IgIcon} type = 'img/png' />
                        </SocialCont>
                    </SocialWrapper>
                    <MySignWrapper href = 'https://www.linkedin.com/in/sadhvik-reddy-245a02191/'
                    >
                        <Sign src = {sign} tpe = "img/png"/>
                </MySignWrapper>
                </FooterContent>
            </FooterContainer>
        </>
    )
}

export default Footer

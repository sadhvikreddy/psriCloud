import React from 'react'

import {
    HeaderHolder,
    HeaderImage,
    HeaderText
}
from '../Projects/ProjectElements'

import {
    WholeContainer,
    ServicesWrapper,
    Container,
    Heading,
    TextWrapper,
    BodyText,
    MainListHeading,
    ListWrapper,
    MainList,
    MainList1,
    MainItem,
}
from './AboutElements'


import HandShake from '../../data/Handshake.jpg'



const About = () => {
    return (
        <>
        <WholeContainer>
        <HeaderHolder>
            <HeaderText>ABOUT</HeaderText>
            <HeaderImage src = {HandShake} alt = {1} />
        </HeaderHolder>
        <Container>
            <Heading>About Us</Heading>
            <TextWrapper>
            <BodyText>
                We PSR INFRASTRUCTURES formerly known as PSR Constructions a leading Construction company in india promoted by Managing Partner of the company P.Sudhakar Reddy, B.Tech.,(Civil).
                <br />He has got Vast Experience in Construction works over three Decades and has been providing services in the field of infrasteuctures.
                <br />The Firm has Executed and Completed about 257 Crore works within the Stipulated period
            </BodyText>
            </TextWrapper>
        </Container>
        <ServicesWrapper>
            <MainListHeading>Our Expertise</MainListHeading>
            <ListWrapper>
            <MainList>
                <MainItem>Logistics and Stevedoring Works</MainItem>
                <MainItem>Mining Operation</MainItem>
                <MainItem>Irrigation Projects</MainItem>
                <MainItem>Road Projects</MainItem>
            </MainList>
            <MainList>
                <MainItem> Soil and Rock Excavation
                    <MainList1>
                        <MainItem>Irrigation Projects</MainItem>
                        <MainItem>Ports</MainItem>
                        <MainItem>Power Projects</MainItem>
                        <MainItem>Housing</MainItem>
                        <MainItem>Industrial Buildings</MainItem>
                        <MainItem>Structures</MainItem>
                    </MainList1>
                    </MainItem>
            </MainList>
            </ListWrapper>
        </ServicesWrapper>
        </WholeContainer>
        </>
    )
}

export default About

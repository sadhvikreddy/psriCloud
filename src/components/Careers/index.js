import React from 'react'
import {
    HeaderHolder,
    HeaderText,
    HeaderImage
}
from '../Projects/ProjectElements'

import {
    Container,
    ContentContainer,
    TogetherWrapper,
    TogetherTag,
    TogetherBody,
    Benefits,
    BenefitsWrapper,
    BenefitsItem,Title,
    Logo
}
from './CareersContainer'
import staff from '../../data/career.jpg'

import {
    GiMeal,GiSkills, GiHealthIncrease, GiMoneyStack
}
from 'react-icons/gi'
import {
    AiFillHome
}
from 'react-icons/ai'

import {
    IoIosPeople
}
from 'react-icons/io'

const Careers = () => {
    return (
        <>
            <Container>
                <HeaderHolder>
                    <HeaderText>CAREERS</HeaderText>
                    <HeaderImage src = {staff} alt = {1} />
                </HeaderHolder>
                <ContentContainer>
                    <TogetherWrapper>
                        <TogetherTag>
                            Together at PSR Infrastructures
                        </TogetherTag>
                        <TogetherBody>
                            No Global movement springs from Individuals. It takes an entire team to build something big and make difference. Together, We work hard, We train hard and We laugh a lot. A Opportunity to Challenge yourself and learn new skills.
                            Going onward we will be posted with Exciting New Challenges, Technologies and businesses, We will meet the Challenges together. <br />Join Us!
                        </TogetherBody>
                    </TogetherWrapper>
                    <BenefitsWrapper>
                        <Benefits>
                            <BenefitsItem>
                                <Logo>
                                    <GiMeal />
                                </Logo>
                                <Title>
                                    Catered Food
                                </Title>
                            </BenefitsItem>
                            <BenefitsItem>
                                <Logo>
                                    <AiFillHome />
                                </Logo>
                                <Title>
                                    Accommodation
                                </Title>
                            </BenefitsItem>
                            <BenefitsItem>
                                <Logo>
                                    <GiHealthIncrease />
                                </Logo>
                                <Title>
                                   Health Insurance
                                </Title>
                            </BenefitsItem>
                            <BenefitsItem>
                                <Logo>
                                    <GiMoneyStack />
                                </Logo>
                                <Title>
                                    Financial Perks and Benefits
                                </Title>
                            </BenefitsItem>
                            <BenefitsItem>
                                <Logo>
                                    <GiSkills />
                                </Logo>
                                <Title>
                                    Learning and Skill Development
                                </Title>
                            </BenefitsItem>
                            <BenefitsItem>
                                <Logo>
                                    <IoIosPeople />
                                </Logo>
                                <Title>
                                    Employee Recognition
                                </Title>
                            </BenefitsItem>
                        </Benefits>
                    </BenefitsWrapper>
                </ContentContainer>
            </Container>
        </>
    )
}

export default Careers
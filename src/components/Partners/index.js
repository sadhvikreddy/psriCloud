import React from 'react'
import {
    ProjectContainer,
    HeaderHolder,
    HeaderText,
    HeaderImage,
}
from '../Projects/ProjectElements'

import {
    CardGrid,
    CardWrapper,
    CardImg
} from './PartnersElements'

import Par from '../../data/partner.jpg'

import c1 from '../../data/corporateLogo/c1.png'
import c2 from '../../data/corporateLogo/c2.png'
import c3 from '../../data/corporateLogo/c3.png'
import c4 from '../../data/corporateLogo/c4.jpg'
import c5 from '../../data/corporateLogo/c5.png'
import c6 from '../../data/corporateLogo/c6.png'



const Partners = () => {
    return (
        <>
            <ProjectContainer>
                <HeaderHolder>
                    <HeaderText>OUR CLIENTS</HeaderText>
                    <HeaderImage src = {Par} alt = {1} />
                </HeaderHolder>
                <CardGrid>
                    <CardWrapper>
                        <CardImg src = {c1} alt = {2}/>
                    </CardWrapper>
                    <CardWrapper>
                        <CardImg src = {c2} alt = {3}/>
                    </CardWrapper>
                    <CardWrapper>
                        <CardImg src = {c3} alt = {4}/>
                    </CardWrapper>
                    <CardWrapper>
                        <CardImg src = {c4} alt = {5}/>
                    </CardWrapper>
                    <CardWrapper>
                        <CardImg src = {c5} alt = {6}/>
                    </CardWrapper>
                    <CardWrapper>
                        <CardImg src = {c6} alt = {7}/>
                    </CardWrapper>
                </CardGrid>
            </ProjectContainer>
        </>
    )
}

export default Partners

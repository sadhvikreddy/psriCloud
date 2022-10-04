import React from 'react'
import {
    Carousel
} from './3D Slider';

import one from '../../data/ImageSlider/1.jpg'
import two from '../../data/ImageSlider/2.jpg'
import three from '../../data/ImageSlider/3.jpg'
import four from '../../data/ImageSlider/4.jpg'
import five from '../../data/ImageSlider/5.jpeg'
import six from '../../data/ImageSlider/6.jpeg'
import seven from '../../data/ImageSlider/7.jpeg'
import eight from '../../data/ImageSlider/8.jpeg'
import nine from '../../data/ImageSlider/9.jpeg'
import ten from '../../data/ImageSlider/10.jpeg'
import ele from '../../data/ImageSlider/11.jpeg'
import thir from '../../data/ImageSlider/13.jpeg'
import fort from '../../data/ImageSlider/14.jpeg'
import fift from '../../data/ImageSlider/15.jpeg'
import sixt from '../../data/ImageSlider/16.jpeg'
import t17 from '../../data/ImageSlider/17.jpeg'
import t18 from '../../data/ImageSlider/18.jpeg'
import t19 from '../../data/ImageSlider/19.jpeg'
import t20 from '../../data/ImageSlider/20.jpeg'
import t21 from '../../data/ImageSlider/21.jpg'


import sign from '../../data/MySign.png'

import { 
    ImageHolder,
    CarContainer,
    CarWrapper,
    CarWrapper1,
    MySignWrapper,
    Sign
} from './OneElements';


let slides = [
    <ImageHolder src = {t20} alt = {20} />,
    <ImageHolder src = {t21} alt = {21} />,
    <ImageHolder src = {one} alt = {1} />,
    <ImageHolder src = {two} alt = {2} />,
    <ImageHolder src = {three} alt = {3} />,
    <ImageHolder src = {four} alt = {4} />,
    <ImageHolder src = {five} alt = {5} />,
    <ImageHolder src = {six} alt = {6} />,
    <ImageHolder src = {seven} alt = {7} />,
    <ImageHolder src = {eight} alt = {8} />,
    <ImageHolder src = {nine} alt = {9} />,
    <ImageHolder src = {ten} alt = {10} />,
    <ImageHolder src = {ele} alt = {11} />,
    <ImageHolder src = {thir} alt = {13} />,
    <ImageHolder src = {t18} alt = {18} />,
    <ImageHolder src = {t19} alt = {19} />,
];

let slides1 = [
    <ImageHolder src = {t17} alt = {17} />,

    <ImageHolder src = {t21} alt = {21} />,
    <ImageHolder src = {sixt} alt = {16} />,
    <ImageHolder src = {ele} alt = {11} />,
    <ImageHolder src = {one} alt = {1} />,
    <ImageHolder src = {two} alt = {2} />,
    <ImageHolder src = {six} alt = {6} />,
    <ImageHolder src = {eight} alt = {8} />,
    <ImageHolder src = {nine} alt = {9} />,
    <ImageHolder src = {ten} alt = {10} />,
    <ImageHolder src = {thir} alt = {13} />,
    <ImageHolder src = {fort} alt = {14} />,
    <ImageHolder src = {fift} alt = {15} />,

    <ImageHolder src = {t18} alt = {18} />,

    <ImageHolder src = {t19} alt = {19} />,

    <ImageHolder src = {t20} alt = {20} />,
];

const One = () => {
    return (
        <>
        <CarContainer>
            <CarWrapper>
                <Carousel slides={slides} autoplay={true} interval={10000}/>
            </CarWrapper>
            <CarWrapper1>
                <Carousel slides={slides1} autoplay={true} interval={10000}/>
            </CarWrapper1>
            <MySignWrapper href = 'https://www.linkedin.com/in/sadhvik-reddy-245a02191/'
                        >
                            <Sign src = {sign} tpe = "img/png"/>
            </MySignWrapper>
        </CarContainer>
        </>
    )
}

export default One

import React,{useState, useEffect} from 'react'
import {
    ProjectContainer,
    HeaderHolder,
    HeaderText,
    HeaderImage,
}
from '../Projects/ProjectElements'

import {
    Card,
    CardImg,
    CardImg1,
    CardImg2,
    CardWrapper,
    CardWrapper1,
    CardTitle,
    CardQuality,
    CardData,
    Card1,
    DoneBtn,
    CardData1,
    CardHeading,
    CardTitle1,
    CardQuality1,
    CardWrapper11,
    CardWrapper111
}
from './equipmentElement'

import equip from '../../data/equip.jpg'

import exca from '../../data/Equipment/exca.png'
import load from '../../data/Equipment/Loader.png'
import roll from '../../data/Equipment/roller.png'
import grad from '../../data/Equipment/grader.png'
import doze from '../../data/Equipment/dozer.png'
import dump from '../../data/Equipment/truck.png'

const tiles = [[
{
    key: 'a1',
    Manufacturer: 'VOLVO',
    Model: 'EC380DL',
    Quality: 1
},
{
    key: 'b2',
    Manufacturer: 'TATA HITACHI',
    Model: 'ZAXIS 370',
    Quality: 1
},
{ 
    key:'c3',
    Manufacturer: 'TATA HITACHI',
    Model: 'EX350',
    Quality: 1
},
{
    key: 'd4',
    Manufacturer: 'VOLVO',
    Model: 'EC290',
    Quality: 1
},
{
    key: 'e5',
    Manufacturer: 'VOLVO',
    Model: 'EC200D',
    Quality: 1
},
{
    key: 'f6',
    Manufacturer: 'TATA HITACHI',
    Model: 'EX200',
    Quality: 7
},
{
    key: 'g7',
    Manufacturer: 'L&T KOMATSU',
    Model: 'PC200',
    Quality: 1
},
{
    key: 'h8',
    Manufacturer: 'TATA HITACHI',
    Model: 'EX70',
    Quality: 1
}],
[{
    key:'i9',
    Manufacturer: 'CATERPILLAR',
    Model: '966H',
    Quality: 4
},
{
    key: 'j11',
    Manufacturer: 'CATERPILLAR',
    Model: 'ZBAR2021',
    Quality: 5
},
{
    key:'k12',
    Manufacturer: 'HITACHI',
    Model: 'ZW220',
    Quality: 1
}],
[{
    key:'l13',
   Manufacturer: 'L&T',
   Model: '1107D',
   Quality: 2 
},
{
    key:'m14',
    Manufacturer: 'VOLVO',
    Model: 'SD110',
    Quality: 5
}],
[{
    key:'n15',
    Manufacturer: 'BEML',
    Model: 'BG605i'
}],
[{
    key: 'o16',
    Manufacturer: 'BEML',
    Model: 'D80'
}],
[
    {
        key: 'p17',
        Manufacturer: 'TATA',
        Model: '2518 HYVA',
        Quality: 27
    },
    {
        key: 'q18',
        Manufacturer: 'ASHOK LEYLAND',
        Model: 'U2518 HD',
        Quality: 9
    },
    {
        key: 'r19',
        Manufacturer: 'ASHOK LEYLAND',
        Model: '2518',
        Quality: 6
    },
    {
        key: 's20',
        Manufacturer: 'TATA',
        Model: '2516 HYVA',
        Quality: 12
    },

]
]

const headers = ['Excavators', 'Loader','Roller','Grader','Dozer','Dumpers' ]

const Equipment = () => {

const [head, setHead] = useState(null)

const [toggle, setToggle] = useState(true)

const [data, setData] = useState(null)

useEffect(()=>{
    window.scrollTo(0,0)
}, [head])
    

    const changeDisplay = (token) => {
        
        setHead(headers[token])
        let x = tiles[token]
        setToggle(!toggle);
        setData(x)
    }
    if(toggle){
    return (
        <>
        <ProjectContainer>
        <HeaderHolder>
            <HeaderText>EQUIPMENT</HeaderText>
            <HeaderImage src = {equip} alt = {1} />
        </HeaderHolder>
        <Card>
            <CardWrapper onClick = {() => {changeDisplay(0)}}>
                <CardImg1 src = {exca} alt = {2}/>
                <CardData>
                    <CardTitle>Excavators</CardTitle>
                    <CardQuality>14</CardQuality>
                </CardData>
            </CardWrapper>
            <CardWrapper  onClick = {() => {changeDisplay(1)}}>
                <CardImg src = {load} alt = {3}/>
                <CardData> 
                    <CardTitle>Loaders</CardTitle>
                    <CardQuality>10</CardQuality>
                </CardData>
            </CardWrapper>
            <CardWrapper  onClick = {() => {changeDisplay(2)}}>
                <CardImg src = {roll} alt = {4}/>
                <CardData>
                    <CardTitle>Rollers</CardTitle>
                    <CardQuality>07</CardQuality>
                </CardData>
            </CardWrapper>
            <CardWrapper  onClick = {() => {changeDisplay(3)}}>
                <CardImg2 src = {grad} alt = {5}/>
                <CardData>
                    <CardTitle>Grader</CardTitle>
                    <CardQuality>01</CardQuality>
                </CardData>
            </CardWrapper>
            <CardWrapper  onClick = {() => {changeDisplay(4)}}>
                <CardImg2 src = {doze} alt = {6}/>
                <CardData>
                    <CardTitle>Dozer</CardTitle>
                    <CardQuality>01</CardQuality>
                </CardData>
            </CardWrapper>
            <CardWrapper  onClick = {() => {changeDisplay(5)}}>
                <CardImg2 src = {dump} alt = {7}/>
                <CardData>
                    <CardTitle>Dumper Trucks</CardTitle>
                    <CardQuality>54</CardQuality>
                </CardData>
            </CardWrapper>
        </Card>
        </ProjectContainer>
        </>
    )
}
else if(!toggle){
    if(data.length>2){
    return ( 
        <ProjectContainer>
        <HeaderHolder>
            <HeaderText>EQUIPMENT</HeaderText>
            <HeaderImage src = {equip} alt = {1} />
        </HeaderHolder>
        <Card1>
        <CardHeading>{head}</CardHeading>
        <CardWrapper1>
            {
                data.map(
                    info => {
                                return(
                            <CardData1 key = {info.key}>
                                <CardTitle1>Manufacturer - {info.Manufacturer}</CardTitle1>
                                <CardTitle1>Model - {info.Model}</CardTitle1>
                                <CardQuality1>x{info.Quality}</CardQuality1>
                            </CardData1>
                        )
                    }
                )
            }
        </CardWrapper1>
        <DoneBtn onClick = {()=>{changeDisplay(null)}}>DONE</DoneBtn>
        </Card1>
        </ProjectContainer>
    )}
    else if(data.length===2){
    return ( 
        <ProjectContainer>
        <HeaderHolder>
            <HeaderText>EQUIPMENT</HeaderText>
            <HeaderImage src = {equip} alt = {1} />
        </HeaderHolder>
        <Card1>
        <CardHeading>{head}</CardHeading>
        <CardWrapper11>
            {
                data.map(
                    info => {
                        return(
                        <CardData1 key = {info.key}>
                            <CardTitle1>Manufacturer - {info.Manufacturer}</CardTitle1>
                            <CardTitle1>Model - {info.Model}</CardTitle1>
                            <CardQuality1>x{info.Quality}</CardQuality1>
                        </CardData1>
                        )
                    }
                )
            }
        </CardWrapper11>
        <DoneBtn onClick = {()=>{changeDisplay(null)}}>DONE</DoneBtn>
        </Card1>
        </ProjectContainer>
    )
}
else{
    return ( 
        <ProjectContainer>
        <HeaderHolder>
            <HeaderText>EQUIPMENT</HeaderText>
            <HeaderImage src = {equip} alt = {1} />
        </HeaderHolder>
        <Card1>
        <CardHeading>{head}</CardHeading>
        <CardWrapper111>
            {
                data.map(
                    info => {
                        return(
                        <CardData1 key = {info.key}>
                            <CardTitle1>Manufacturer - {info.Manufacturer}</CardTitle1>
                            <CardTitle1>Model - {info.Model}</CardTitle1>
                        </CardData1>
                        )
                    }
                )
            }
        </CardWrapper111>
        <DoneBtn onClick = {()=>{changeDisplay(null)}}>DONE</DoneBtn>
        </Card1>
        </ProjectContainer>
    )
}
}
else{
    return(null)
}
}

export default Equipment


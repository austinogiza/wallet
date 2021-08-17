import React from 'react'
import styled from 'styled-components'
import {Container} from '../container/Wrapper'
import { Header1 } from '../styles/TextStyles'
import img from '../assets/heroimage.jpg'
const Hero = () => {
    return (
        <Body>

            <WrapperContainer>

                <TitleText>
                Recover what you thought was lost.
                </TitleText>

            </WrapperContainer>
            
        </Body>
    )
}

const Body = styled.div`
height: 809px;
width: 100%;
background: url(${img}) no-repeat center center/cover;
position: relative;
::after{
    position: absolute;
    content: "";
    background: rgba(0,0,0,0.2);
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
}

@media only screen and (max-width:860px){

    height: 650px;

}
`

const WrapperContainer = styled(Container)`


`
const TitleText = styled(Header1)`
 color: #fff;

 position: relative;
 z-index: 2;
max-width: 420px;
width: 100%;
padding: 64px 0 0 0;

@media only screen and (max-width:860px){

    padding: 96px 0 0 0;

}
`
export default Hero

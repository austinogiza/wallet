import React from 'react'
import styled from 'styled-components'
import {Container} from '../container/Wrapper'
import { Header1 } from '../styles/TextStyles'
import img from '../assets/heroimage.png'
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
`

const WrapperContainer = styled(Container)`


`
const TitleText = styled(Header1)`
 color: #fff;

max-width: 420px;
width: 100%;
padding: 64px 0 0 0;
`
export default Hero

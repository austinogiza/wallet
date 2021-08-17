import React from 'react'
import styled from 'styled-components'
import {Container} from '../container/Wrapper'
import { Header2, Header3, bodyText } from '../styles/TextStyles'
import { WalletTheme } from '../styles/ColorStyles'
import img from '../assets/journey.png'
const OurJourney = () => {
    return (
        <Body>
            <Wrapper>
                <Title>
<Titletext>Our Journey</Titletext>
                </Title>
                <Bottom >
                    <Container>
                    <BottomLeft>
                        <Header>
                        Get in touch 
                        </Header>
                        <Bodytextp>
                        Extracting the mnemonic seed (thus the master private key) from a hardware wallet should not be possible. However in some implementations it is. Some proofs of concept have been documented [1] [2]. Recovery is an expensive process because the method requires specific equipment and expertise to be reliable. The total value of recovered funds, so far, is a 8-digit figure in USD.
                        </Bodytextp>
<br />
<Bodytextp>
<p>"Any sufficiently advanced technology is indistinguishable from magic." ― Arthur C. Clarke</p>
                        </Bodytextp>
                    </BottomLeft>
                    </Container>
                    <Bottomright>
                        <Bottomimg src={img} alt="Wallet surgery"/>

                    </Bottomright>

                </Bottom>
            </Wrapper>
        </Body>
    )
}


const Body = styled.div`
  min-height: 660px;
  height: 100%;
width: 100%;
overflow: hidden;
background: ${WalletTheme.tertiary};
color: #fff;

`
const Wrapper = styled.div`
display: flex;
flex-direction: column;

`
const Title = styled.div`
height: 70px;
width: 100%;

margin: 56px 0 ;
text-align: center;
@media only screen and (max-width:860px){
    margin: 40px 0 ;
}
`
const Titletext = styled(Header2)`

`
const Bottom = styled.div`
display: grid;
grid-template-columns: repeat(2,1fr);
grid-gap: 24px;

@media only screen and (max-width:860px){
    grid-template-columns: repeat(1,1fr);
    grid-template-areas: "BottomRight"
    "BottomLeft";
}
`
const BottomLeft = styled.div`
display: flex;
flex-direction: column;
margin: 24px 0 24px 56px;

@media only screen and (max-width:860px){
    grid-area: BottomLeft;
    margin: 24px 0 ;
}
`
const Header = styled(Header3)`

`
const Bodytextp = styled(bodyText)`
margin: 8px 0 ;
`
const Bottomright = styled.div`
position: relative;

@media only screen and (max-width:860px){
    grid-area: BottomRight;
}

`
const Bottomimg = styled.img`
max-height: 600px;
max-width: 800px;
height: 100%;
width: 100%;
margin: 4px 0 0 0;
object-fit: cover;
`
export default OurJourney


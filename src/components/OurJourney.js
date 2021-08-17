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

                    <Bottomright>
                        <Bottomimg src={img} alt="Wallet surgery"/>

                    </Bottomright>

                </Bottom>
            </Wrapper>
        </Body>
    )
}


const Body = styled.div`
height: 660px;
width: 100%;
background: ${WalletTheme.tertiary};
color: #fff;
@media only screen and (max-width:860px){
    height: 100%;
    min-height: 660px;
}
`
const Wrapper = styled(Container)`
display: flex;
flex-direction: column;

`
const Title = styled.div`
height: 70px;
width: 100%;

margin: 56px 0 ;
text-align: center;
`
const Titletext = styled(Header2)`

`
const Bottom = styled.div`
display: grid;
grid-template-columns: repeat(2,1fr);
grid-gap: 24px;

@media only screen and (max-width:860px){
    grid-template-columns: repeat(1,1fr);
}
`
const BottomLeft = styled.div`
display: flex;
flex-direction: column;
`
const Header = styled(Header3)`

`
const Bodytextp = styled(bodyText)`
margin: 8px 0 ;
`
const Bottomright = styled.div`
position: relative;

`
const Bottomimg = styled.img`
max-height: 600px;
max-width: 745px;
height: 100%;
width: 100%;
margin: 4px 0 0 0;
`
export default OurJourney


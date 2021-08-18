import React from 'react'
import styled from 'styled-components'
import {Container} from 'container/Wrapper'
import { Header2, Header3, bodyText } from 'styles/TextStyles'
import { WalletTheme } from 'styles/ColorStyles'
import img from 'assets/about.png'
const AboutUs = ({aboutRef}) => {
    return (
        <Body ref={aboutRef}>
            <Wrapper>
                <Title>
<Titletext>About us</Titletext>
                </Title>
                <Bottom >
                   

                    <Bottomright>
                        <Bottomimg src={img} alt="Wallet surgery"/>

                    </Bottomright>
                    <Container>
                    <BottomLeft>
                        <Header>
                        Born in 2019, here to stay
                        </Header>
                        <Bodytextp>
                        wallet.surgery is a service proposed by Altcoinomy SA, the premier facilitator in cryptocurrency due diligence and institutional trading, based in Switzerland.
                        </Bodytextp>
                        
                        <Bodytextp>
Altcoinomy SA is regulated by Swiss law.
</Bodytextp>

<Bodytextp>
Please visit altcoinomy.com for more information.
</Bodytextp>
                     
                    </BottomLeft>
                    </Container>

                </Bottom>
            </Wrapper>
        </Body>
    )
}


const Body = styled.div`
  height: 100%;
    min-height: 600px;
width: 100%;
overflow: hidden;
background: ${WalletTheme.secondary};
color:  ${WalletTheme.primary};
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
}
`
const BottomLeft = styled.div`
display: flex;
flex-direction: column;
margin: 40px 0;
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
export default AboutUs


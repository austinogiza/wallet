import React from 'react'
import styled from 'styled-components'
import {Container} from 'container/Wrapper'
import { footerMediumText, Header4, footerSmallText,footerLargeText,footerMediumBoldText } from 'styles/TextStyles'
import { WalletTheme } from 'styles/ColorStyles'
import logo from 'assets/logo.svg'
import img from 'assets/altcoinomy.svg'
const Footer = () => {
    return (
        <Body>
            <Wrapper>
              
                <Bottom >
                <Bottomright>
                        <Logoimg src={logo} alt="Wallet surgery logo"/>

                    </Bottomright>
                    <BottomLeft>
                        <Header>
                        Terms & Conditions
                        </Header>
                        <Bodytexttopp>
                        These are some thing you should know...
                        </Bodytexttopp>
                        <Bodytextp>
                        No reliance and no warranty

wallet.surgery makes all reasonable efforts to obtain reliable information. However, this does not guarantee in any way the completeness and correctness of the information and opinions contained in the site are published for information purposes and may be modified at any time without prior notice. Therefore, they are merely approximate and in no way, constitute investment, legal, financial or any other kind of advice. The wallet.surgery website, together with all content, information and materials contained therein, is provided "as is" and "as available" ", without any representations or warranties of any kind. In no event, wallet.surgery shall be liable to any person for any direct or indirect damage of any kind, including negligence, related to the use of the website.
                        </Bodytextp>

                    </BottomLeft>
                    <Bottommiddle>
                       <Title>Our steps</Title>
                       <Titletext>Meet</Titletext>
                       <Titletext>KYC</Titletext>
                       <Titletext>Send us your wallet</Titletext>
                       <Titletext>Breaking into the wallet</Titletext>
                       <Titletext>Your assets released</Titletext>
                       <Titletext>Privacy — Terms &copy; {new Date().getFullYear()}</Titletext>
                       <Bottomimg src={img} alt="Wallet surgery"/>
                    </Bottommiddle>
                 
                    <Bottomend>
                    

                    </Bottomend>

                </Bottom>
            </Wrapper>
        </Body>
    )
}


const Body = styled.footer`
margin: 40px 0 0 0;
height: 100%;
min-height: 400px;
width: 100%;
background: ${WalletTheme.secondary};
color: ${WalletTheme.primary};
padding: 16px 0;

`
const Wrapper = styled(Container)`
display: flex;
flex-direction: column;


`
const Title = styled(footerMediumBoldText)`
height: 20px;
width: 100%;

margin: 0 0 24px 0 ;
text-align: left;

`
const Titletext = styled(footerMediumText)`
 margin: 8px 0 ;
`
const Bottom = styled.div`
display: grid;
grid-template-columns: 1fr 2fr 1fr 1fr;
grid-gap: 40px;
margin: 40px 0;
@media only screen and (max-width:860px){
    grid-template-columns: repeat(1,1fr);
}
`
const BottomLeft = styled.div`
display: flex;
flex-direction: column;
`
const Header = styled(Header4)`

`
const Bodytextp = styled(footerSmallText)`
margin: 8px 0 ;
`
const Bottomright = styled.div`
position: relative;

`

const Bottommiddle = styled.div`
position: relative;
::after{
    content:"";
    position: absolute;
    height: 100%;
    width: 5px;
    background: ${WalletTheme.tertiary};
    top: 0;
    left: -16px;
}
`
const Bottomimg = styled.img`
height: 35px;
max-width: 301px;
width: 100%;
margin: 56px 0 0 0;

`

const Bottomend = styled.div`

width: 100%;
height: 100%;
display: flex;
justify-content: flex-end;
align-items: flex-end;
`
const Logoimg = styled.img`
height: 34px;
max-width: 292px;
width: 100%;

`

const Bodytexttopp= styled(footerLargeText)`
margin: 16px 0;
`
export default Footer


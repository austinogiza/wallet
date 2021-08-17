import React from 'react'
import styled from 'styled-components'
import {Container} from '../container/Wrapper'
import { Header2, Header3, bodyText } from '../styles/TextStyles'
import { WalletTheme } from '../styles/ColorStyles'
import release from '../assets/release.png'
import touch from '../assets/touch.png'
import card from '../assets/card.png'
import delivery from '../assets/Delivery.png'
import chip from '../assets/chip.png'

const TimeLine = () => {
    return (
        <Body>
            <Wrapper>
                <Title>
<Titletext>How it works</Titletext>
                </Title>
                <Bottom >
                    <FullLine/>
                    
                <Bottomright>
                        <Bottomimg src={touch} alt="Wallet surgery"/>

                    </Bottomright>
                    
                    <Bottommiddle>
                        <Bottomnumber>
                            1
                        </Bottomnumber>

                    </Bottommiddle>
                    <BottomLeft>
                        <Header>
                        Get In Touch
                        </Header>
                        <Bodytextp>
                        Are your digital assets locked in your hardware device? Get in touch so we can schedule a video call so we can become acquainted and hear your story.
                        </Bodytextp>

                    </BottomLeft>




                </Bottom>
                <Bottom >
               
                        
                        
                        <BottomLeft>
                            <Header>
                            KYC Your Assets
                            </Header>
                            <Bodytextp>
                            In order to comply with the law, we will ask you a couple of personal information and documents. We also ask some technical information about your device in order for us to be 100% sure that we can handle your case. Once both parties feel confident moving forward, a service agreement is signed.
                            </Bodytextp>
    
                        </BottomLeft>
    
                        <Bottommiddle>
                            <Bottomnumber>
                             2
                            </Bottomnumber>
    
                        </Bottommiddle>
                    <Bottomright>
                            <Bottomimg src={card} alt="Wallet surgery"/>
    
                        </Bottomright>
    
    
                    </Bottom>
                    <Bottom >
                    
                    <Bottomright>
                            <Bottomimg src={delivery} alt="Wallet surgery"/>
    
                        </Bottomright>
                        
                        <Bottommiddle>
                            <Bottomnumber>
                                3
                            </Bottomnumber>
    
                        </Bottommiddle>
                        <BottomLeft>
                            <Header>
                            Securely Send us your Wallet
                            </Header>
                            <Bodytextp>
                            Each case is unique and requires different methods of delivery. Depending on the circumstance we either organise an in-person meeting, most likely in Geneva, Switzerland, or you send us your wallet via a secured courier. In exceptional circumstances, we might even send someone to your location to pick up the wallet.
                            </Bodytextp>
    
                        </BottomLeft>
    
    
    
    
                    </Bottom>
                    <Bottom >
                    
                   
                        <BottomLeft>
                            <Header>
                            The Attack Begins
                            </Header>
                            <Bodytextp>
                            With great precision and skill, we begin the process of recovering your funds. </Bodytextp>
    
                        </BottomLeft>
    
    
                        <Bottommiddle>
                            <Bottomnumber>
                                4
                            </Bottomnumber>
    
                        </Bottommiddle>
                        <Bottomright>
                            <Bottomimg src={chip} alt="Wallet surgery"/>
    
                        </Bottomright>
                        
    
    
                    </Bottom>
                    <Bottom >
                    
                    <Bottomright>
                            <Bottomimg src={release} alt="Wallet surgery"/>
    
                        </Bottomright>
                        
                        <Bottommiddle>
                            <Bottomnumber>
                                5
                            </Bottomnumber>
    
                        </Bottommiddle>
                        <BottomLeft>
                            <Header>
                            Your Assets become Accessible
                            </Header>
                            <Bodytextp>
                            Once the seed has successfully been recovered, we load it on a brand new device identical to yours. We transfer the newly liberated funds to an escrow wallet, the transaction timestamps the recovery. Subsequently, we transfer the funds, minus a success fee, back to you.
                            </Bodytextp>
    
                        </BottomLeft>
    
    
    
    
                    </Bottom>
            </Wrapper>
        </Body>
    )
}


const Body = styled.div`
min-height: 660px;
width: 100%;
background: ${WalletTheme.secondary};
color: ${WalletTheme.primary};


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
@media only screen and (max-width:860px){
    margin: 40px 0 ;
}
`
const Titletext = styled(Header2)`

`
const Bottom = styled.div`
display: flex;
flex-direction: row;
margin: 64px 0;
position: relative;

@media only screen and (max-width:860px){
    
    flex-direction: column;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(1,1fr);
    grid-template-areas: "BottomTop"
    "Number"
    "Text";
    align-items: center;
  justify-items: center;
}
`

const FullLine = styled.div`
width: 5px;
background: ${WalletTheme.primary};
height: 100%;
position: absolute;
min-height: 2220px;
left: 50%;
top: 5px;
transform: translateX(-50%);
z-index: 1;


@media only screen and (max-width:860px){
    min-height: 4020px;

}
@media only screen and (max-width:460px){
    min-height: 4250px;

}
`
const BottomLeft = styled.div`
display: flex;
flex-direction: column;
min-height: 174px;
max-width: 555px;
width: 100%;
position: relative;
z-index: 2;

@media only screen and (max-width:860px){
  text-align: center;
  background:${WalletTheme.secondary};
grid-area: Text;
  p{
      text-align: left;
  }

}

`
const Header = styled(Header3)`

`
const Bodytextp = styled(bodyText)`
margin: 8px 0 ;
`
const Bottomright = styled.div`
position: relative;
height: 435px;
max-width: 624px;
width: 100%;
position: relative;
z-index: 2;
@media only screen and (max-width:860px){
grid-area: BottomTop;

}
`
const Bottomimg = styled.img`
max-height: 450px;
max-width: 600px;
min-height: 250px;
height: 100%;
width: 100%;
margin: 4px 0 0 0;
@media only screen and (max-width:460px){
    min-height: 250px;
    max-height: 350px;
}
`
const Bottommiddle = styled.div`
margin: 0 16px;
position: relative;
z-index: 2;
@media only screen and (max-width:860px){
    margin: 24px 0;
    grid-area: Number;

}
`
const Bottomnumber = styled.div`
height: 82px;
width: 82px;
background: ${WalletTheme.primary};
border: 6px solid ${WalletTheme.secondary};
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;

font-family: "Work Sans";
font-size: 48px;
font-style: normal;
font-weight: 700;
line-height: 70px;
color: ${WalletTheme.white};

@media only screen and (max-width:550px){
    font-size: 24px;
    height: 64px;
width: 64px;
}

`
export default TimeLine


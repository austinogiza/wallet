import React, { useState } from 'react'
import styled from 'styled-components'
import {NavbarContainer} from '../container/Wrapper'
import { mainButton } from '../styles/Buttons'
import { WalletTheme } from '../styles/ColorStyles'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

const Navbar = ({workClick,processClick,aboutClick, getInTouch}) => {

    const [menu, setMenu]=useState(false)

    const toggleMenu =()=>{
        setMenu(!menu)
    }
    return (
        <Body>
            <Wrapper>
<Logocover>
  <Link to='/'>  <Logoimg src={logo} alt="Wallet Surgery Logo"/></Link>
</Logocover>
<Navlink toggle={menu}>
    <Navlinksul>
        <Navli onClick={workClick}>How it works</Navli>
        <Navli onClick={processClick}>Process</Navli>
        <Navli onClick={aboutClick}>About us</Navli>
        <Navli><Navbutton to='/' onClick={getInTouch}>Get in Touch</Navbutton></Navli>
    </Navlinksul>
</Navlink>

<Navtoggle onClick={toggleMenu}>
    <Togtop menu={menu}/>
    <Tocenter menu={menu}/>
    <Togbottom menu={menu}/>
</Navtoggle>
            </Wrapper>
            
        </Body>
    )
}

const Body = styled.nav`
width:100%;
background: ${WalletTheme.secondary};
color:  ${WalletTheme.tertiary};
height:85px;

@media only screen and (max-width:850px){
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
}
`
const Wrapper = styled(NavbarContainer)`

display: grid;
grid-template-columns: repeat(2,1fr);
align-items: center;
position: relative;
`

const Logocover = styled.div`
height: 34px;
max-width: 305px;
cursor: pointer;
`
const Logoimg = styled.img`
height: 34px;
max-width: 305px;
width: 100%;
`
const Navlink = styled.div`

justify-self: flex-end;
@media only screen and (max-width:850px){
  position: fixed;
  width: 100%;
  z-index: 20;
  max-width: 1000px;
  height:400px;
top: 0;
left: 0;
  background: ${WalletTheme.secondary};
  display: flex;
  align-items: center;
  transition: 0.3s ease;
-moz-transition: 0.3s ease;
-webkit-transition: 0.3s ease;
  justify-content: center;
  transform: ${props=>props.toggle? "translateY(0%)":"translateY(-1000px)"};
}
`
const Navlinksul = styled.ul`
display: flex;
align-items: center;
width: 100%;
flex-direction: row;

@media only screen and (max-width:850px){
    flex-direction: column;
    align-items: center;
}

`
const Navli = styled.li`
margin: 0 30px;
padding: 0;
max-width: 220px;
width: 100%;
white-space: nowrap;
font-family: "Work Sans";
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 1.6;
cursor: pointer;
a{
    margin: 0;
    width: 100%;
}

@media only screen and (max-width:550px){
    font-size: 18px;
}

@media only screen and (max-width:850px){
    margin: 16px 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}
`
const Navbutton = styled(mainButton)`

`

const Navtoggle = styled.div`
display: none;
flex-direction: column;
width: 32px;
height: 80px;
position: fixed;
top: 32px;
cursor: pointer;
right: 16px;
z-index: 22;
transition: 0.3s ease;
-moz-transition: 0.3s ease;
-webkit-transition: 0.3s ease;
@media only screen and (max-width:850px){
    display: flex;
}

`
const Togtop = styled.div`
width: 100%;
height: 2px;
background: ${WalletTheme.primary};
margin: 2px 0;
transition: 0.3s ease;
-moz-transition: 0.3s ease;
-webkit-transition: 0.3s ease;
transform: ${props=>props.menu? "rotate(-45deg) translate(-3px,2px)":"rotate(0)"} ;
`
const Tocenter = styled.div`
width: 100%;
height: 2px;
background: ${WalletTheme.primary};
margin: 2px 0;
transition: 0.3s ease;
-moz-transition: 0.3s ease;
-webkit-transition: 0.3s ease;
display: ${props=>props.menu? "none":"flex"} ;
`
const Togbottom = styled.div`
transition: 0.3s ease;
-moz-transition: 0.3s ease;
-webkit-transition: 0.3s ease;
width: 100%;
height: 2px;
background: ${WalletTheme.primary};
margin: 2px 0;
transform: ${props=>props.menu? "rotate(45deg) translate(-4px,-3px)":"rotate(0)"} ;

`
export default Navbar

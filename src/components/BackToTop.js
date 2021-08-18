import React, {useEffect, useState} from 'react'
import styled, {keyframes}from 'styled-components'

import {BsChevronUp} from 'react-icons/bs'
import { WalletTheme } from 'styles/ColorStyles'

const BackToTop = () => {
  const [scrolled, setScrolled] = useState(false)

  const backTo = ()=>{
    window.scrollTo(0,0)
  }

  const handleScroll = ()=>{
    if(window.pageYOffset > 100){
      setScrolled(true)
    }else{
      setScrolled(false)
    }
  }
  useEffect(() => {
    
 window.addEventListener('scroll', handleScroll)
  }, [])
  return (
   <Back scrolled={scrolled} onClick={backTo}>
  <Backcover>
  <Topicon/>
  </Backcover>

   </Back>
  )
}


const bounce = keyframes`
0%{
transform: translateY(-5px);
}
100%{
  transform: translateY(0px);
}
`

const Back = styled.div`
width: 60px;
height: 60px;
border-radius: 50%;
background: ${WalletTheme.secondary};
border: 2px solid  ${WalletTheme.primary};
display: ${props => props.scrolled ? "block": 'none'};
position: fixed;
bottom: 30px;
cursor: pointer;
right: 30px;
z-index: 1000;
transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
`

const Backcover = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
`
const Topicon = styled(BsChevronUp)`
width: 32px;
height: 32px;
color: ${WalletTheme.primary};
animation: ${bounce} 1s infinite alternate-reverse;
transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
${Back}:hover &{
  color: ${WalletTheme.tertiary};
}
`

export default BackToTop

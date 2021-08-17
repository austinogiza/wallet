import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const contactButton = styled.button`
height: 45px;
max-width: 190px;
/* padding: 16px 24px; */
width: 100%;
display: flex;
justify-content: center;
align-items: center;
border-radius: 36px;
font-family: "Work Sans";
font-size: 20px;
color: #fff;
font-style: normal;
font-weight: 400;
line-height: 40px;
text-align: center;
outline:none;
background: #64C3D2;
transition: 0.3s ease;
-moz-transition: 0.3s ease;
-webkit-transition: 0.3s ease;

:hover{
    background: #0D757F;
}


`


export const mainButton = styled(NavLink)`
height: 45px;
max-width: 190px;
width: 100%;
padding: 16px 24px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 36px;
font-family: "Work Sans";
font-size: 20px;
color: #fff;
font-style: normal;
font-weight: 400;
background: #64C3D2;
transition: 0.3s ease;
-moz-transition: 0.3s ease;
-webkit-transition: 0.3s ease;

:hover{
    background: #0D757F;
}

line-height: 40px;
text-align: center;
outline:none;


`
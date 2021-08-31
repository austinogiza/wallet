import React, { useState } from 'react'
import styled from 'styled-components'
import {Container} from 'container/Wrapper'
import { Header2, Header3, bodyText2 } from 'styles/TextStyles'
import { WalletTheme } from 'styles/ColorStyles'
import {FiPhone, FiMail} from 'react-icons/fi'
import {FaTelegramPlane} from 'react-icons/fa'
import {AiOutlineSkype} from 'react-icons/ai'
import { messageInput, TextInput } from '../styles/InputStyles'
import {contactButton } from 'styles/Buttons'
import Loader from 'components/Loader'
import { ContactURL } from 'api/Constants'
import axios from 'axios'



const ContactForm = ({contactRef}) => {

//initialize form values
    const initial ={
        first_name:"",
last_name:"",
message:"",
email:"",
phone:"",
    }

const [form,setForm]=useState(initial)
const [loading,setLoading]=useState(false)
const [sent,setSent]=useState(false)

    const {
        first_name,
last_name,
email,
phone,
message
    }=form

//handle form submit
    const onSubmit = e=>{
        e.preventDefault()
        setLoading(true)
axios.post(ContactURL, {
    first_name,
    last_name,
    email,
    phone,
    message
})
.then(res=>{
    setSent(true)
    setForm(initial)
    setLoading(false)
})
.catch(err=>{
    setLoading(false)
})
  

    }

    const handleChange = e=>{
        const {name,value}=e.target
        setForm({...form,[name]:value})
    }
    return (
        <Body ref={contactRef}>
            <Wrapper>
                <Title>
<Titletext>Get In Touch</Titletext>
                </Title>
                <Bottom >
                    <BottomLeft>
                     <Bottomrow>
                     <Header>Contact us</Header>
                        <Bodytexttop>If you have any questions, don’t hesitate to get in touch</Bodytexttop>
                        <Bodytextp>
                            <PhoneIcon/>
<a href="tel:++41(0)222343456">+41 (0) 22 234 34 56</a>

                        </Bodytextp>
                        <Bodytextp>
                        <MailIcon/>
<a href="mailto:recovery@altcoinomy.com">recovery@altcoinomy.com</a>

                        </Bodytextp>
                        <Bodytextp>
                        <TelegramIcon/>
<a href="http://@altcoinomy" target="_blank" rel="noopener noreferrer">@altcoinomy</a>

                        </Bodytextp>
                        <Bodytextp>
                            <SkypeIcon/>
<a href="mailto:altcoinomy@gmail.com">altcoinomy@gmail.com</a>

                        </Bodytextp>
                     </Bottomrow>
                        

                    </BottomLeft>

                    <Bottomright>
                        {sent?
                    
                    <>
                    <FormSent>
                        Thank you for your mail🎉. <br />
                        We will be in touch
                    </FormSent>

                    </>:
                    
                    <>
                     <Formcontainer onSubmit={onSubmit}>
                            <Formrow>
                                <Formcolumn>
                                <Forminput type="text" placeholder="First Name *" onChange={handleChange} value={first_name} name="first_name" required/>
                                </Formcolumn>
                                <Formcolumn>
                                <Forminput type="text" placeholder="Last Name *" onChange={handleChange} value={last_name} name="last_name" required/>
                                </Formcolumn>
                            </Formrow>
                            <Formrow>
                                <Formcolumn>
                                <Forminput type="email" placeholder="Email *" onChange={handleChange} value={email} name="email" required />
                                </Formcolumn>
                                <Formcolumn>
                                <Forminput type="tel" placeholder="Phone *" onChange={handleChange} value={phone} name="phone" required/>
                                </Formcolumn>
                            </Formrow>
                            <Formsinglerow>
                                <FormMessage placeholder="Message *" onChange={handleChange} value={message} name="message" required/>

                               
                            </Formsinglerow>
                            <Formbuttonrow>
<Mainbutton>{loading?<Loader/> :"Get in Touch"}</Mainbutton>

                            </Formbuttonrow>
                        </Formcontainer>

                    
                    </>}
                       
                    
                    </Bottomright>

                </Bottom>
            </Wrapper>
        </Body>
    )
}


const Body = styled.div`
  height: 100%;
    min-height: 1024px;
width: 100%;
background: ${WalletTheme.white};
color: ${WalletTheme.primary};;

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
align-items: center;

@media only screen and (max-width:860px){
    flex-direction: column;
    
}
`
const BottomLeft = styled.div`
display: flex;
flex-direction: column;
background:${WalletTheme.primary};
color: ${WalletTheme.white};
height: 470px;
max-width: 380px;
width: 100%;
align-items: flex-start;
padding: 24px 50px;
justify-content: center;
@media only screen and (max-width:460px){
    padding: 32px;
}

`
const Bottomrow = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
`
const Header = styled(Header3)`

`

const Bodytexttop = styled(bodyText2)`
margin: 16px 0 24px 0 ;
display: flex;
flex-direction: row;
width: 100%;
cursor: pointer;

transition: 0.3s ease;
-moz-transition: 0.3s ease;
-webkit-transition: 0.3s ease;

`
const Bodytextp = styled(bodyText2)`
margin: 8px 0 ;
display: flex;
flex-direction: row;
width: 100%;
cursor: pointer;

transition: 0.3s ease;
-moz-transition: 0.3s ease;
-webkit-transition: 0.3s ease;

:hover{
    color: ${WalletTheme.tertiary};
}

a{
    color:${WalletTheme.white};
    transition: 0.3s ease;
-moz-transition: 0.3s ease;
-webkit-transition: 0.3s ease;
    :hover{
    color: ${WalletTheme.tertiary};
}
}
`
const Bottomright = styled.div`
position: relative;
min-height: 642px;
max-width: 862px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;

background:${WalletTheme.secondary};
color:${WalletTheme.primary};

padding: 24px;

`
const Formcontainer = styled.form`
display: flex;
flex-direction: column;
width: 100%;
align-items: center;
`
const Formrow = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(2,1fr);
grid-gap: 24px;
margin:16px 0;
max-width: 758px;

@media only screen and (max-width:700px){
    grid-template-columns: repeat(1,1fr);   
}
`
const Formcolumn = styled.div`
width: 100%;
`
const Forminput = styled(TextInput)`

`
const Formsinglerow = styled.div`
margin:16px 0;
width: 100%;
max-width: 758px;
`
const FormMessage = styled(messageInput)`

`

const PhoneIcon = styled(FiPhone)`

height: 24px;
width: 24px;
color:${WalletTheme.white};
cursor: pointer;
margin: 0 24px 0 0;
transition: 0.3s ease;
-moz-transition: 0.3s ease;
-webkit-transition: 0.3s ease;
${Bodytextp}:hover &{
    color: ${WalletTheme.tertiary};
}

@media only screen and (max-width:460px){
    margin: 0 16px 0 0;
}
`
const MailIcon = styled(FiMail)`

height: 24px;
width: 24px;
color:${WalletTheme.white};
transition: 0.3s ease;
-moz-transition: 0.3s ease;
-webkit-transition: 0.3s ease;
cursor: pointer;
margin: 0 24px 0 0;
${Bodytextp}:hover &{
    color: ${WalletTheme.tertiary};
}
@media only screen and (max-width:460px){
    margin: 0 16px 0 0;
}
`
const TelegramIcon = styled(FaTelegramPlane)`

height: 24px;
width: 24px;
color:${WalletTheme.white};
cursor: pointer;
transition: 0.3s ease;

-moz-transition: 0.3s ease;
-webkit-transition: 0.3s ease;
margin: 0 24px 0 0;
${Bodytextp}:hover &{
    color: ${WalletTheme.tertiary};
}
@media only screen and (max-width:460px){
    margin: 0 16px 0 0;
}
`
const SkypeIcon = styled(AiOutlineSkype)`

height: 24px;
width: 24px;
color: ${WalletTheme.white};
cursor: pointer;
margin: 0 24px 0 0;
transition: 0.3s ease;
-moz-transition: 0.3s ease;
-webkit-transition: 0.3s ease;
${Bodytextp}:hover &{
    color: ${WalletTheme.tertiary};
}
@media only screen and (max-width:460px){
    margin: 0 16px 0 0;
}
`


const Formbuttonrow = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;

`

const Mainbutton = styled(contactButton)``

const FormSent = styled(Header3)`
text-align: center;
`

export default ContactForm


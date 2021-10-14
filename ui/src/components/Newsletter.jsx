import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60vh;
    background-color:#fcf5f5;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;`

const Title = styled.h1`
    font-size: 60px;
    margin-bottom:20px;`

const Desc = styled.div`
    font-size:16px;
    font-weight:400;
    margin-bottom:20px;`

const InputContainer = styled.div`
    width:50%;
    height:40px;
    display:flex;
    justify-content:space-between;
    border:1px solid lightgray;`

const Input = styled.input`
    flex:8;
    border:none;
    padding-left:20px;
    outline: none;`

const Button = styled.button`
    flex:1;
    border:none;
    background-color:teal;
    color:white;`

function Newsletter() {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Get timely updates of your favorit products from our shop</Desc>
            <InputContainer>
             <Input placeholder="Your email"/>
             <Button>
                 <Send/>
             </Button>
            </InputContainer>
            

        </Container>
    )
}

export default Newsletter

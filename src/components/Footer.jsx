import { Phone, Facebook, Home, Instagram, Mail, Pinterest, Twitter, Room } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Logo = styled.h1`

`
const Title = styled.h3`
    margin-bottom: 30px;

`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`
const SocialContainer = styled.h1`
    display: flex;
`
const Description = styled.p`
    margin: 20px 0px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;

`
const Payment = styled.img`
    width: 50%;

`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Nozama 2</Logo>
            <Description>
                Some description here
            </Description>
            <SocialContainer>
                <SocialIcon color='3B5999'>
                    <Facebook></Facebook>
                </SocialIcon>
                <SocialIcon color='E4405F'>
                    <Instagram></Instagram>
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                    <Twitter></Twitter>
                </SocialIcon>
                <SocialIcon color='E60023'>
                    <Pinterest></Pinterest>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man</ListItem>
                <ListItem>Woman</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:"10px"}}/>Address</ContactItem>
            <ContactItem><Phone/>Phone Number</ContactItem>
            <ContactItem><Mail/>Email</ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"></Payment>
        </Right>
    </Container>
  )
}

export default Footer
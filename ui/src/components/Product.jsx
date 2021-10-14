import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Info = styled.div`
    opacity:0;
    width:100%;
    height: 100%;
    position:absolute;
    top:0;
    left:0;
    background-color:rgba(0,0,0,0.2);
    z-index:3;
    display:flex;
    align-items:center;
    justify-content:center;
    transition:1s all ease;
    cursor: pointer;`

const Container = styled.div`
    flex:1;
    margin:5px;
    min-width:280px;
    height: 350px;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#f5fbfd;
    position:relative;
    
    &:hover ${Info}{
        opacity:1;
    }`

const Circle = styled.div`
    width:200px;
    height:200px;
    border-radius:50%;
    background-color:#fff;
    position:absolute;`

const Image = styled.img`
    height: 75%;
    z-index:2;`



const Icon = styled.div`
    width:40px;
    height: 40px;
    display:flex;
    background-color:#fff;
    border-radius:50%;
    justify-content:center;
    align-items:center;
    margin:10px;
    cursor: pointer;
    transition:0.5s all ease;
    
    &:hover{
        background-color:#e9f5f5;
        transform:scale(1.1);
    }`

function Product({item}) {
    return (
        <Container>
            <Circle/>
            <Image src={item.img} alt="hsh"/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                    <SearchOutlined/>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined/>
                </Icon>
            </Info>
            
        </Container>
    )
}

export default Product

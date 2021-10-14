import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Annoncement from '../components/Annoncement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

const Container = styled.div``

const Wrapper = styled.div`
    padding:50px;
    display:flex;`

const ImgContainer = styled.div`
    flex:1;`

const Image = styled.img`
    width:100%;
    height: 80vh;
    object-fit:cover;`
    
const InfoContainer = styled.div`
    flex:1;
    padding:0 50px;`
    
const Title = styled.h1`
    font-weight:300;`
    
const Desc = styled.p`
    margin:20px 0;`
    
const Price = styled.span`
    font-weight:200;
    font-size:40px;`

const FilterContainer = styled.div`
    width:70%;
    display:flex;
    justify-content:space-between;
    margin:40px 0;`

const Filter = styled.div`
    display:flex;
    align-items:center;`

const FilterTitle = styled.span`
    font-size:20px;
    font-weight:200;`

const FilterColor = styled.div`
    width:20px;
    height: 20px;
    border-radius:50%;
    background-color:${props=>props.color};
    margin:0 5px;
    cursor: pointer;`

const FilterSize = styled.select`
    margin-left:10px;
    padding:6px;`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    display:flex;
    width:70%;
    align-items:center;
    justify-content:space-between;
    margin-top:3rem;`

const AmountContainer = styled.div`
    display:flex;
    align-items:center;
    font-weight:700;`

const Amount = styled.span`
    width:30px;
    height: 30px;
    border-radius:15px;
    border:1px solid brown;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0 10px;`


const Buttons = styled.button`
    padding:10px;
    border:2px solid teal;
    background-color:#fff;
    font-weight:500;
    cursor: pointer;
    
    &:hover{
        background-color:teal;
        color:white;
    }`



function ProductData() {
    return (
        <Container>
            <Annoncement/>
            <Navbar/>
            <Wrapper>
                <ImgContainer>
                <Image src="https://www.politix.com.au/on/demandware.static/-/Library-Sites-PolitixSharedLibrary/default/dwdd2d05eb/images/Blog/2020/09/18/1.jpg" alt="sjs"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Shorts Women</Title>
                    <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, dolor. Quidem magni repudiandae pariatur deleniti rem aspernatur esse voluptatum eum, ab tenetur, numquam, et iste earum sunt quibusdam accusantium ipsa?</Desc>
                    <Price>$20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black"/>
                            <FilterColor color="red"/>
                            <FilterColor color="gray"/>
                            <FilterColor color="green"/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XL</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XXL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Buttons>ADD TO CART</Buttons>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductData

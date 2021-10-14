import React from 'react'
import styled from 'styled-components'
import Annoncement from '../components/Annoncement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'

const Container = styled.div``

const Title = styled.h1`
    margin:20px;`

const FilterContainer = styled.div`
    display:flex;
    justify-content:space-between;`

const Filter = styled.div`
    margin:20px;`

const Filtertext = styled.span`
    font-size:20px;
    font-weight:600;
    margin-right:20px;`

const Select = styled.select`
    padding:6px;
    margin-right:20px;`
    
const Option = styled.option``

function ProductList() {
    return (
        <Container>
            <Annoncement/>
            <Navbar/>

            <Title>Dreses</Title>
            <FilterContainer>
                <Filter>
                <Filtertext>Filter Products :</Filtertext>
                <Select>
                    <Option disabled selected>color</Option>
                    <Option>red</Option>
                    <Option>black</Option>
                    <Option>yellow</Option>
                    <Option>gray</Option>
                    <Option>white</Option>
                    <Option>blue</Option>
                    <Option>green</Option>
                    <Option>navi-blue</Option>
                </Select>
                <Select>
                    <Option disabled selected>size</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    <Option>XXL</Option>
                    <Option>S</Option>
                    <Option>XXXL</Option>
                </Select>
                </Filter>
                <Filter>
                  <Filtertext>Sort Products :</Filtertext>
                   <Select>
                       <Option selected>Newest</Option>
                       <Option>Price (asc)</Option>
                       <Option>Price (desc)</Option>
                   </Select>
                </Filter>
            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>

        </Container>
    )
}

export default ProductList

import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from '../components/Product'

const Container = styled.div`
    padding:25px;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;`

function Products() {
    return (
        <Container>
            {popularProducts.map((item,i)=>(
                <Product item={item} key={i}/>
            ))}
        </Container>
    )
}

export default Products

import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import CategoriesItem from './CategoriesItem'

const Container = styled.div`
    display:flex;
    padding:20px;
    justify-content:space-between;
    `
    
function Categories() {
    return (
        <Container>
            {categories.map((item,i)=>(
                <CategoriesItem item={item} key={i}/>
            ))}
        </Container>
    )
}

export default Categories

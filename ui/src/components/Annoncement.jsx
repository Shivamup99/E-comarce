import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height:40px;
    background-color:teal;
    color:#fff;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:14px;
    font-weight:500;
    letter-spacing:2px;`


function Annoncement() {
    return (
        <Container>
            Hello and welcome. In my shop you’ll find handmade items that are very good.
        </Container>
    )
}

export default Annoncement

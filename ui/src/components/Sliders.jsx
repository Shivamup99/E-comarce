import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import { sliderItems } from '../data'

const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    /* background-color:coral; */
    position:relative;
    overflow:hidden;`

const Arrow = styled.div`
    width:50px;
    height: 50px;
    background-color:#fff7f7;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    top:0;
    bottom:0;
    margin:auto;
    left:${props=>props.direction==="left" && "10px"};
    right:${props=>props.direction==="right" && "10px"};
    cursor: pointer;
    opacity:0.5;
    z-index:2;`

const Wrapper = styled.div`
    height: 100%;
    display:flex;
    transform:translateX(${props=>props.slideIndex *-100}vw);
    transition:all 1.5s ease;`

const Slide = styled.div`
    display:flex;
    align-items:center;
    height: 100vh;
    width:100vw;
    background:#${props=>props.bg};`

const Imgcontainer=styled.div`
    flex:1;
    height: 100%;`

const Image = styled.img`
   height: 80%;
   cursor: pointer; `
    

const Infocontainer = styled.div`
    flex:1;
    padding:50px;`

const Title = styled.h1`
    font-size:70px;
    text-transform:uppercase;`

const Desc = styled.p`
    margin:50px 0;
    letter-spacing:2px;
    font-size:18px;
    font-weight:500;
    text-transform:uppercase;`
    
const Button = styled.button`
    padding:10px;
    font-size:20px;
    background:transparent;
    text-transform:uppercase;`

function Sliders() {
    const [clickSlide,setClickSlide] = useState(0)
    
    const handleClick = (direction)=>{
       if(direction==='left'){
           setClickSlide(clickSlide>0 ? clickSlide-1:5)
       }else{
        setClickSlide(clickSlide<5 ? clickSlide+1:0)
       }
    }

    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper slideIndex={clickSlide}>
                {sliderItems && sliderItems.map((item,i)=>(
                   <Slide bg={item.bg} key={i}>
                   <Imgcontainer>
                   <Image src={item.img}/>
                   </Imgcontainer>
                   <Infocontainer>
                       <Title>{item.title}</Title>
                       <Desc>{item.desc}</Desc>
                       <Button>Show Now</Button>
                   </Infocontainer>
               </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}

export default Sliders

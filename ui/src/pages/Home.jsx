import React from 'react'
import Annoncement from '../components/Annoncement'
import Navbar from '../components/Navbar'
import Sliders from '../components/Sliders'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

function Home() {
    return (
        <div>
            <Annoncement/>
            <Navbar/>
            <Sliders/>
            <Categories/>
            <Products/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Home

import React from 'react'
import Navber from '../../components/navber/navber'
import Footer from '../../components/footer/footer'
import Bloglist from '../../components/blogslist/bloglist'
import Hero from '../../components/hero/hero'
import Category from '../../components/category/category'

const Homepage = () => {
    return (
        <main>
            <Navber />
            <Hero />
            <Category />
            <Bloglist />
            <Footer />
        </main>
    )
}

export default Homepage

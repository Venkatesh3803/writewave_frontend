import React from 'react'
import Navber from '../../components/navber/navber'
import Footer from '../../components/footer/footer'
import SingleBlog from '../../components/singleblog/singleBlog'

const Blogpage = () => {
    return (
        <main>
            <Navber />
            <SingleBlog/>
            <Footer />
        </main>
    )
}

export default Blogpage

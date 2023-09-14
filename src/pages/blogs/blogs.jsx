import React from 'react'
import Bloglist from '../../components/blogslist/bloglist'
import Navber from '../../components/navber/navber'
import Footer from '../../components/footer/footer'

const Blogs = () => {
    return (
        <main>
            <Navber />
            <Bloglist />
            <Footer />
        </main>
    )
}

export default Blogs

import React from 'react'
import Navber from '../../components/navber/navber'
import Footer from '../../components/footer/footer'
import Bloglist from '../../components/blogslist/bloglist'

const BlogsPage = () => {
    return (
        <main>
            <Navber />
            <Bloglist blogsPage/>
            <Footer />
        </main>
    )
}

export default BlogsPage
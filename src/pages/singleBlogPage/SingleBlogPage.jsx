import { useEffect, useState } from "react"
import Navber from '../../components/navber/navber'
import Footer from '../../components/footer/footer'
import SingleBlog from '../../components/singleblog/singleBlog'
import { useParams } from "react-router-dom"

import { publicRequest } from "../../requestMethods"

const SingleBlogPage = () => {
    const { id } = useParams()
    const [blog, setBlog] = useState({})
    useEffect(() => {
        const fetchingBlogs = async () => {
            const res = await publicRequest.get(`/post/${id}`)
            setBlog(res.data)
        }
        fetchingBlogs()
    }, [])


    return (
        <main>
            <Navber />
            <SingleBlog blog={blog} setBlog={setBlog} id={id} />
            <Footer />
        </main>
    )
}

export default SingleBlogPage

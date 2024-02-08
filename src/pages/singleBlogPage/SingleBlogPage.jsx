import { useEffect, useState } from "react"
import Navber from '../../components/navber/navber'
import Footer from '../../components/footer/footer'
import SingleBlog from '../../components/singleblog/singleBlog'
import { useParams } from "react-router-dom"

import { fetchingSingleBlogs } from "../../requestMethods"

const SingleBlogPage = () => {
    const { id } = useParams()
    const [blog, setBlog] = useState({})
    useEffect(() => {
        fetchingSingleBlogs(`/post/${id}`, "get").then((res) => {
            setBlog(res)
        })
    }, [id])


    return (
        <main>
            <Navber />
            {blog ?
                <>
                    <SingleBlog blog={blog} setBlog={setBlog} id={id} />
                </>
                :
                <h1>Loading</h1>
            }
            <Footer />
        </main>
    )
}

export default SingleBlogPage

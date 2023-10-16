import { useEffect, useState } from "react"
import BlogCard from "../blogCard/blogCard"
import "./bloglist.css"
import { publicRequest } from "../../requestMethods"

const Bloglist = ( ) => {

    const [blog, setBlog] = useState([])
    const [category, setCategory] = useState("")

    const categoryList = [
        {
            id: 1,
            name: "food",
            bg: "#ECC6C7"
        },
        {
            id: 2,
            name: "health",
            bg: "#ECE4C6"
        },
        {
            id: 3,
            name: "technology",
            bg: "#BFC1EC"
        },
        {
            id: 4,
            name: "sports",
            bg: "#ECBFE7"
        },
        {
            id: 5,
            name: "news",
            bg: "#C9ECBF"
        },
        {
            id: 6,
            name: "business",
            bg: "#BFEAEC"
        },
    ]


    useEffect(() => {
        const fetchingBlogs = async () => {
            const res = await publicRequest.get(category ? `/post?category=${category}` : "/post")
            setBlog(res.data)
        }
        fetchingBlogs()
    }, [category])



    return (
        <div className='blog-list'>

            <div className="category">
                {categoryList.map(c => {
                    return (
                        <div className="category-card" style={{ background: `${c.bg}`, color: "black" }} key={c.id} onClick={() => setCategory(c.name)}>
                            {c.name}
                        </div>
                    )
                })}

            </div>
            <div className="blogcontainer">
                {blog.map((b) => {
                    return (
                        <BlogCard key={b._id} data={b} />
                    )
                })}
            </div>

        </div>
    )
}

export default Bloglist

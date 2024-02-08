import { useEffect, useState } from "react"
import BlogCard from "../blogCard/blogCard"
import "./bloglist.css"
import { fetchingBlogs } from "../../requestMethods"

const Bloglist = ({ paramsId, profilePage, blogsPage }) => {

    const [blog, setBlog] = useState([])
    const [category, setCategory] = useState("")

    const categoryList = [
        {
            id: 1,
            name: "All",
            link: "",
            bg: "#c6ccec"
        },
        {
            id: 2,
            name: "Entertainment",
            link: "entertainment",
            bg: "#ecc6eb"
        },
        {
            id: 3,
            name: "Food",
            link: "food",
            bg: "#ECC6C7"
        },
        {
            id: 4,
            name: "Health",
            link: "health",
            bg: "#ECE4C6"
        },
        {
            id: 5,
            name: "Technology",
            link: "technology",
            bg: "#BFC1EC"
        },
        {
            id: 6,
            name: "Sports",
            link: "sports",
            bg: "#ECBFE7"
        },
        {
            id: 7,
            name: "News",
            link: "news",
            bg: "#C9ECBF"
        },
        {
            id: 8,
            name: "Business",
            link: "business",
            bg: "#BFEAEC"
        },
    ]


    useEffect(() => {
        fetchingBlogs((category ? `/post?category=${category}` : paramsId ? `/post?userId=${paramsId}` : "/post"), "get").then((res) => {
            setBlog(res)
        })
    }, [category])



    return (
        <div className='blog-list'>
            {!profilePage && !blogsPage &&
                <div className="category">
                    {categoryList.map(c => {
                        return (
                            <div className="category-card" style={{ background: `${c.bg}`, color: "black" }} key={c.id} onClick={() => setCategory(c.link)}>
                                {c.name}
                            </div>
                        )
                    })}

                </div>
            }
            <div className="blogcontainer">
                {blog?.map((b) => {
                    return (
                        <BlogCard key={b._id} data={b} />
                    )
                })}
            </div>

        </div>
    )
}

export default Bloglist

import BlogCard from "../blogCard/blogCard"
import "./bloglist.css"

const Bloglist = () => {
    return (
        <div className='blog-list'>
            <div className="blogcontainer">
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </div>
    )
}

export default Bloglist

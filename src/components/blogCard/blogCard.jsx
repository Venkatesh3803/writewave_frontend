import { Link } from "react-router-dom"
import "./blogCard.css"
import moment from 'moment';


const BlogCard = ({ data }) => {

    return (
        <div className='blog-card'>
            <div className="blog-container">

                <div className="blog-top">
                    <Link to={`../singleblog/${data._id}`}>
                        <img src={data.image ? data.image : "https://www.freeiconspng.com/uploads/no-image-icon-11.PNG"} alt="" />
                    </Link>
                </div>
                <div className="blog-buttom">
                    <div className="blog-category">
                        <h3>{data.category} — </h3>
                        <span>{moment(data.createdAt).format("MMM Do YY")} </span>
                    </div>
                    <Link to={`../singleblog/${data._id}`}>
                        <h2>{data.title}.</h2>
                    </Link>
                    <p>{data.shortDesc?.slice(0, 100)}...</p>
                    <Link to={`../singleblog/${data._id}`}>
                        <span style={{ textAlign: "end" }}>Read More...</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogCard

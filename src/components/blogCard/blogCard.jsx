import { Link } from "react-router-dom"
import "./blogCard.css"

const BlogCard = () => {
    return (
        <div className='blog-card'>
            <div className="blog-top">
                <Link to={"/singleblog"}>
                    <img src="https://images.pexels.com/photos/12429032/pexels-photo-12429032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </Link>
            </div>
            <div className="blog-buttom">
                <div className="blog-category">
                    <h3>Travel — </h3>
                    <span>July 2, 2020 </span>
                </div>
                <Link to={"singleblog"}>
                    <h2>Your most unhappy customers are your greatest source of learning.</h2>
                </Link>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

                <div className="blog-profile">
                    <div className="profile-img">
                        <img src="https://images.pexels.com/photos/18093135/pexels-photo-18093135/free-photo-of-a-person-wearing-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>

                    <h4>Jhon</h4>

                </div>
            </div>
        </div>
    )
}

export default BlogCard

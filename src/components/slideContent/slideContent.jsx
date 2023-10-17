import moment from "moment"
import "./slideContent.css"
import { useEffect, useState } from "react"
import { publicRequest } from "../../requestMethods"
import { Link } from "react-router-dom"

const SlideContent = ({ data }) => {
    const [currUser, setCurrUser] = useState("")
    useEffect(() => {
        const fetchingCurrUser = async () => {
            const res = await publicRequest.get(`/user/single/${data?.userId}`)
            setCurrUser(res.data)
        }
        fetchingCurrUser()
    }, [data?.userId])



    return (
        <div className='slider-card'>
            <div className="slider-img">
                <Link to={`/singleblog/${data._id}`}>
                    <img src={data?.image ? data.image : "https://www.freeiconspng.com/uploads/no-image-icon-11.PNG"} alt="" />
                </Link>
            </div>
            <div className="slider-info">
                <div className="slider-category">
                    <h4>{data.category} -</h4>
                    <span>{moment(data.createdAt).format("MMM Do YY")}</span>
                </div>
                <Link to={`/singleblog/${data._id}`}>
                    <h1>{data.title}</h1>
                </Link>
                <p>{data.shortDesc}</p>
                <div className="slider-profile">

                    <div className="profile-img">
                        <Link to={`/profile/${data.userId}`}>
                            <img src={currUser?.profilePic ? currUser.profilePic : "https://www.freeiconspng.com/uploads/no-image-icon-11.PNG"} alt="" />
                        </Link>
                    </div>
                    <div className="profile-name">
                        <Link to={`/profile/${data.userId}`}>
                            <h3>{currUser.username}</h3>
                        </Link>
                        <span>{currUser.profression}</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SlideContent

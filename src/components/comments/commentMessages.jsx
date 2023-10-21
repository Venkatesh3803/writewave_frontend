import React, { useEffect, useState } from 'react'
import { publicRequest } from '../../requestMethods'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'



const CommentMessages = ({ data }) => {
    const [commUser, setCommUser] = useState({})
    const user = useSelector((state) => state.user.user)

    useEffect(() => {
        const fetchingCommUser = async () => {
            const res = await publicRequest.get(`/user/single/${data?.userId}`)
            setCommUser(res.data)
        }
        fetchingCommUser()
    }, [])

    const handleClick = () => {
        console.log("clicked")
    }

    return (

        <>
            <div className="user-comment-profile">
                <div className="user-comment-profile-img">
                    <Link to={`../profile/${data.userId}`}>
                        <img onClick={handleClick} src={commUser?.profilePic ? commUser.profilePic : "https://www.freeiconspng.com/uploads/no-image-icon-11.PNG"} alt="" />
                    </Link>
                </div>
                <div className="user-comment-info">
                    <Link to={`../profile/${data.userId}`}>
                        <h4 >{commUser?.username}</h4>
                    </Link>
                    <span>{moment(data?.createdAt).startOf().fromNow()} </span>
                </div>
                <div className="comment-text">
                    <p>{data?.comment}</p>
                </div>
            </div>
        </>
    )
}

export default CommentMessages

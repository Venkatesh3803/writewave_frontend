import React, { useEffect, useState } from 'react'
import { publicRequest } from '../../requestMethods'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'



const CommentMessages = ({ data}) => {
    const [commUser, setCommUser] = useState({})
    const user = useSelector((state) => state.user.user)

    useEffect(() => {
        const fetchingCommUser = async () => {
            const res = await publicRequest.get(`/user/single/${data.userId}`)
            setCommUser(res.data)
        }
        fetchingCommUser()
    }, [])


 

    return (
        <div className="user-comment-profile">
            <div className="user-comment-profile-img">
                <img src="https://images.pexels.com/photos/18093135/pexels-photo-18093135/free-photo-of-a-person-wearing-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className="user-comment-info">
                <Link to={`../profile/${data.userId}`}>
                    <h4>{commUser.username}</h4>
                </Link>
                <span>{moment(data?.createdAt).startOf().fromNow()} </span>
            </div>
            <div className="comment-text">
                <p>{data.comment}</p>
            </div>
        </div>
    )
}

export default CommentMessages

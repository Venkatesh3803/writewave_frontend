import { useEffect, useState } from "react"
import "./comments.css"
import { fetchingComment, postComment, publicRequest, userRequest } from "../../requestMethods"
import { useParams, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { toast } from "react-toastify"
import CommentMessages from "./commentMessages"


const Comments = () => {
    const user = useSelector(state => state.user.user)
    const { id } = useParams()
    const navigate = useNavigate()
    const [comm, setComm] = useState([])
    const [text, setText] = useState("")

    useEffect(() => {
        fetchingComment(`/comment/${id}`, "get").then((res) => {
            setComm(res)
        })

    }, [id])

    const handlePostComment = async () => {
        if (!user) {
            navigate("/login")
            return
        }
        const token = localStorage.getItem("token") && JSON.parse(localStorage.getItem("token"))

        const newComment = {
            userId: user._id,
            postId: id,
            comment: text,
        }


        try {
            if (text.length < 3) return toast.warn("Min 3 Characters")
            postComment(`/comment`, "post", newComment, token).then((res) => {
                setComm([...comm, res])
            })
            toast.success("Commented sucessfully")
            setText("")
        } catch (error) {
            return toast.error("Session Expired")
        }
    }


    return (
        <div className='comments'>
            <h2>Comments</h2>
            <div className="comments-input">
                <input type="text" placeholder='Comment' value={text} onChange={(e) => setText(e.target.value)} />
                <button onClick={handlePostComment}>Comment</button>
            </div>
            <div className="comment-box">
                <div className="user-comment">

                    {comm.map((c) => {
                        return (
                            <CommentMessages key={c._id} data={c} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Comments

import Comments from "../comments/comments"
import "./singleBlog.css"
import { publicRequest, userRequest } from "../../requestMethods"
import { useEffect, useState } from "react"
import moment from "moment"
import { Link, useParams, useNavigate } from "react-router-dom"
import { BiDotsVerticalRounded } from "react-icons/bi"
import { toast } from "react-toastify"
import { useSelector } from "react-redux"
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


const SingleBlog = ({ blog, setBlog }) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const user = useSelector((state) => state.user.user)


    const [currUser, setCurrUser] = useState("")
    const [dots, setDots] = useState(false)
    const [editMode, setEditMode] = useState(false)

    const handleEditMode = () => {
        setEditMode(true);
        setDots(false)
    }
    const handleChange = (e) => {
        setBlog(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    }

    useEffect(() => {
        const fetchingCurrUser = async () => {
            const res = await publicRequest.get(`/user/single/${blog?.userId}`)
            setCurrUser(res.data)
        }
        fetchingCurrUser()
    }, [blog?.userId])



    const handleUpdate = async () => {
        const updatedInfo = {
            title: blog.title,
            desc: blog.desc,
            shortDesc: blog.shortDesc,
        }

        try {
            const res = await userRequest.patch(`/post/${id}`, {
                updatedInfo
            })

            toast.success(res.data)
        } catch (error) {
            return (error.message)
        }

        setEditMode(false)
    }

    const handleDelete = async () => {
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to do this.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: async () => {
                        try {
                            const res = await userRequest.delete(`/post/${id}`)
                            toast.success(res.data)
                            navigate("/")

                        } catch (error) {
                            toast.error(error.message)
                        }
                    }
                },
                {
                    label: 'No',
                    onClick: () => {
                        return
                    }
                }
            ]
        });

    }


    return (
        <div className='single-blog'>
            <div className="single-blog-container">
                <div className="single-blog-top">
                    <Link to={`../profile/${currUser?._id}`}>
                        <img src={currUser?.profilePic ? currUser.profilePic : "https://www.freeiconspng.com/uploads/no-image-icon-11.PNG"} alt="" />
                    </Link>
                    <Link to={`../profile/${currUser?._id}`}>
                        <h3>{currUser?.username}</h3>
                    </Link>
                    <span style={{ fontSize: "14px", color: "rgb(234, 230, 230)" }}>{moment(blog?.createdAt).startOf().fromNow()} </span>
                </div>

                <div className="single-blog-middle">
                    {editMode ? <input type="text" value={blog?.title} name="title" onChange={handleChange} /> : <h1>{blog?.title}</h1>}

                    {editMode ? <input type="text" value={blog?.shortDesc} name="shortDesc" onChange={handleChange} /> : <p>{blog?.shortDesc}</p>}
                    <img src={blog?.image ? blog.image : "https://www.freeiconspng.com/uploads/no-image-icon-11.PNG"} alt="" />
                    <div className="content">
                        {user._id === blog.userId &&
                            <BiDotsVerticalRounded className="dots" onClick={() => setDots(!dots)} />
                        }
                        {dots &&
                            <div className="edit-slide">
                                <li onClick={handleEditMode}>Edit</li>
                                <li onClick={handleDelete}>Delete</li>
                            </div>
                        }
                        {editMode ? <textarea cols={10} rows={15} name="desc" value={blog?.desc} onChange={handleChange} /> :
                            <div className="paragraph">
                                {blog?.desc?.split("\n").map((p, i) => {
                                    return (
                                        <p key={i}>{p}</p>
                                    )
                                })}
                            </div>
                        }

                        {editMode && <div className="edit-btn">
                            <button onClick={handleUpdate}>Update</button>
                            <button onClick={() => setEditMode(false)}>Cancel</button>
                        </div>}
                        <Comments />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SingleBlog

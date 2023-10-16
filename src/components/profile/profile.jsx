import "./profile.css"
import Bloglist from '../blogslist/bloglist'
import BlogForm from "../BlogForm/BlogForm";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethods";
import { AiOutlineEdit } from "react-icons/ai"
import ProfileEdit from "./profileEdit";



const Profile = () => {
    const user = useSelector((state) => state.user.user)
    const { id } = useParams()
    const [currUser, setCurrUser] = useState("")
    const [editMOde, setEditMode] = useState(false)
    useEffect(() => {
        const fetchingUser = async () => {
            const res = await publicRequest.get(`/user/single/${id}`)
            setCurrUser(res.data)
        }
        fetchingUser()
    }, [id])


    return (
        <>
            <div className="profile">
                <div className="profile-left">
                    <div className="profile-card">
                        {user._id === currUser._id &&
                            <AiOutlineEdit className="edit" onClick={() => setEditMode(true)} />
                        }
                        <img src={currUser.profilePic ? currUser.profilePic : "https://www.freeiconspng.com/uploads/no-image-icon-11.PNG"} alt="" />

                        <div className="profile-card-info">
                            <div className="username">
                                <h4>UserName :-</h4>
                                <p>{currUser.username}</p>
                            </div>
                            <div className="username">
                                <h4>Email :-</h4>
                                <p>{currUser.email}</p>
                            </div>
                            <div className="username">
                                <h4>LivesIn :-</h4>
                                <p>{currUser.livesIn ? currUser.livesIn : "City"}</p>
                            </div>
                            <div className="username">
                                <h4>Gender :-</h4>
                                <p>{currUser.gender ? currUser.gender : "Gender"}</p>
                            </div>
                            <div className="username">
                                <h4>Status :-</h4>
                                <p>{currUser.status ? currUser.status : "Status"}</p>
                            </div>

                            <hr />
                            {/* <div className="followings-box">
                                <div className="followings">
                                    <h4>Following </h4>
                                    <p>50</p>
                                </div>
                                <div className="vl"></div>
                                <div className="followings">
                                    <h4>Followers </h4>
                                    <p>205</p>
                                </div>
                            </div>
                            <hr /> */}
                        </div>
                        <button>Follow</button>
                    </div>


                </div>
                {editMOde && <ProfileEdit setEditMode={setEditMode} currUser={currUser} setCurrUser={setCurrUser} />}

                {user._id === id ?
                    <div className="profile-right">
                        <h2 style={{ textAlign: "center" }}>Add post</h2>
                        <BlogForm />
                    </div>
                    : ""}

            </div>
            <Bloglist profilePage paramsId={id} />
        </>
    )
}

export default Profile

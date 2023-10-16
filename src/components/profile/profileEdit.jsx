import { useState } from "react"
import "./profile.css"
import { userRequest } from "../../requestMethods"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import axios from "axios"

const ProfileEdit = ({ setEditMode, currUser, setCurrUser }) => {
    const { id } = useParams()
    const [image, setImage] = useState("")

    const handleImage = async (e) => {
        const file = e.target.files[0];
        if (file) {
            try {
                const formData = new FormData();
                formData.append('file', file);
                formData.append('upload_preset', 'blogApp');
                const response = await axios.post(
                    'https://api.cloudinary.com/v1_1/ddsepnnsm/image/upload',
                    formData
                );
                const imageUrl = response.data.secure_url;
                setImage(imageUrl);

            } catch (err) {
                console.log(err)
            }

        }
    }


    const handleChange = (e) => {
        setCurrUser(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        let updatedUser = {
            username: currUser.username,
            profilePic: image,
            gender: currUser.gender,
            livesIn: currUser.livesIn,
            status: currUser.status
        }


        try {
            const res = await userRequest.patch(`/user/${id}`, updatedUser)
            toast.success(res.data)
            setEditMode(false)
        } catch (error) {
            toast.error("UserName Already taken")
            return error.message
        }
    }


    return (
        <div className='profile-edit'>
            <div className="edit-container">
                <h2 style={{ textAlign: "center" }}>Profile</h2>

                <div className="cancel" onClick={() => setEditMode(false)}>X</div>
                <form action="" onSubmit={handleSubmit}>
                    <div className="rows">
                        <div className="inputs">
                            <label htmlFor="">UserName :-</label>
                            <input type="text" placeholder="First Name" name="username" value={currUser.username} onChange={handleChange} />
                        </div>
                        <div className="inputs">
                            <p>{currUser.email}</p>
                        </div>
                    </div>
                    <div className="inputs">
                        <label htmlFor="">LivesIn :-</label>
                        <input type="text" placeholder="LivesIn" name="livesIn" value={currUser.livesIn} onChange={handleChange} />
                    </div>
                    <div className="inputs">
                        <label htmlFor="">Gender :-</label>
                        <input type="text" placeholder="Gender" name="gender" value={currUser.gender} onChange={handleChange} />
                    </div>
                    <div className="inputs">
                        <label htmlFor="">Status:-</label>
                        <input type="text" placeholder="Status" name="status" value={currUser.status} onChange={handleChange} />
                    </div>
                    <div className="inputs">
                        <label htmlFor="">ProfilePic:-</label>
                        <input type="file" placeholder="First Name" onChange={handleImage} />
                    </div>
                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    )
}

export default ProfileEdit

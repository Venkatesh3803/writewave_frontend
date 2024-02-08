import { useState } from "react"
import "./BlogForm.css"
import { createBlog, userRequest } from "../../requestMethods"
import { toast } from "react-toastify"
import { useSelector } from "react-redux"
import axios from "axios"

const BlogForm = () => {
    const user = useSelector(state => state.user.user)
    const [inputs, setInputs] = useState({})
    const [image, setImage] = useState("")

    const handleChange = (e) => {
        setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    }

    const handleImage = async (e) => {
        const file = e.target.files[0];
        if (file) {
            try {
                const formData = new FormData();
                formData.append('file', file);
                formData.append('upload_preset', 'crowdFunding');
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


    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token") && JSON.parse(localStorage.getItem("token"))
        //post data
        const newPost = {
            userId: user._id,
            title: inputs.title,
            desc: inputs.desc,
            shortDesc: inputs.shortDesc,
            category: inputs.category,
            image: image
        };


        try {
            if (token == null || undefined) return toast.warn("Session Expired Please Login Again")
            createBlog("/post", "post", newPost, token).then((res) => {
                if (res) {
                    toast.success("posted sucessfull")
                }
            })
        } catch (error) {
            return error.message
        }
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div className="add-inputs">
                    <label htmlFor="">Title :-</label>
                    <input type="text" name="title" id="" placeholder="Title" required onChange={handleChange} />
                </div>
                <div className="add-inputs">
                    <label htmlFor="">image :-</label>
                    <input type="file" onChange={handleImage} />
                </div>
                <div className="add-inputs">
                    <label htmlFor="">Catergory :-</label>
                    <select name="category" id="" required onChange={handleChange}>
                        <option value="">options</option>
                        <option value="sports">Sports</option>
                        <option value="technology">Technology</option>
                        <option value="health">Health</option>
                        <option value="food">Food</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="news">News</option>
                        <option value="busniess">busniess</option>
                    </select>
                </div>
                <div className="add-inputs">
                    <label htmlFor="">Short Desc :-</label>
                    <input type="text" name="shortDesc" required placeholder="Short description" onChange={handleChange} />
                </div>
                <div className="add-inputs">
                    <label htmlFor="desc"> Description :-</label>
                    <textarea cols={80} name="desc" required rows={14} onChange={handleChange} />
                </div>
                <button type="submit">post</button>
            </form>

        </div>
    )
}

export default BlogForm

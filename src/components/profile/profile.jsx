import "./profile.css"
import Bloglist from '../blogslist/bloglist'

const Profile = () => {

    const user = true;
    return (
        <>
            <div className="profile">
                <div className="profile-left">
                    <div className="profile-card">
                        <img src="https://images.pexels.com/photos/18093135/pexels-photo-18093135/free-photo-of-a-person-wearing-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

                        <div className="profile-card-info">
                            <div className="username">
                                <h4>UserName :-</h4>
                                <p>jhon Batia</p>
                            </div>
                            <div className="username">
                                <h4>Email :-</h4>
                                <p>jhonBatia@gmail.com</p>
                            </div>
                            <div className="username">
                                <h4>Location :-</h4>
                                <p>Mumbai</p>
                            </div>
                            <hr />
                            <div className="followings-box">
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
                            <hr />
                        </div>
                        <button>Follow</button>
                    </div>
                </div>
                {user &&

                    <div className="profile-right">
                        <h2 style={{ textAlign: "center" }}>Add post</h2>
                        <form action="">
                            <div className="add-inputs">
                                <label htmlFor="">Title :-</label>
                                <input type="text" name="" id="" placeholder="Title" />
                            </div>
                            <div className="add-inputs">
                                <label htmlFor="">image :-</label>
                                <input type="file" name="" id="" placeholder="Title" />
                            </div>
                            <div className="add-inputs">
                                <label htmlFor="">Catergory :-</label>
                                <select name="" id="">
                                    <option value="">options</option>
                                    <option value="">Sports</option>
                                    <option value="">Technology</option>
                                    <option value="">News</option>
                                    <option value="">Food</option>
                                    <option value="">Travel</option>
                                    <option value="">busniess</option>
                                </select>
                            </div>
                            <div className="add-inputs">
                                <label htmlFor="">Short Desc :-</label>
                                <input type="text" name="" id="" placeholder="Short description" />
                            </div>
                            <div className="add-inputs">
                                <label htmlFor=""> Description :-</label>
                                <textarea cols={80} rows={14} />
                            </div>
                            <button>post</button>
                        </form>

                    </div>
                }
            </div>




            <Bloglist />
        </>
    )
}

export default Profile

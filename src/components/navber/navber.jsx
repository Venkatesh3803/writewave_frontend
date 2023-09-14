import "./navber.css"
import search from "../../assets/search.png"
import { Link } from "react-router-dom"
import userImg from "../../assets/user.png"
import { useState } from "react"
import { useSelector } from "react-redux"
const Navber = () => {
    const user = useSelector((state) => state.user.user)

    const [menu, setMenu] = useState(false)
    return (
        <nav>
            <div className="nav-left">
                <div className="logo">WriteWave</div>
                <ul>
                    <li>
                        <Link to={"/"}>
                            HOME
                        </Link>
                    </li>
                    <li>
                        CONTACT
                    </li>
                    <li>
                        ABOUT
                    </li>
                </ul>

            </div>
            <div className="nav-right">
                <div className="search">
                    <input type="text" placeholder='Search here...' />
                    <img src={search} alt="" width={20} />
                </div>
                {user ?
                    <div style={{ cursor: "pointer" }} onClick={() => setMenu(!menu)}>
                        <img src={userImg} alt="" />
                    </div>
                    :
                    <Link to={"/login"}>
                        <span>Login</span>
                    </Link>
                }


                {menu &&
                    <div className="menu" >

                        <li>
                            <Link to={"/profile"} style={{ color: "black" }}>
                                Add Post
                            </Link>
                        </li>
                        <li>
                            <Link to={"/profile"} style={{ color: "black" }}>
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"} style={{ color: "black" }}>
                                Setting
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"} style={{ color: "black" }}>
                                LogOut
                            </Link>
                        </li>

                    </div>
                }
            </div>
        </nav>
    )
}

export default Navber

import "./navber.css"
import search from "../../assets/search.png"
import { Link } from "react-router-dom"
import userImg from "../../assets/user.png"
import { useContext, useState } from "react"
import { useDispatch } from "react-redux"
import { logOut } from "../../redux/authReducer"
import { useNavigate } from "react-router-dom"
import { useDebounce } from 'use-debounce';
import { InputSearch } from "../../contextApi/searchInputContext"



const Navber = () => {
    const onChange = useContext(InputSearch)

    const user = JSON.parse(localStorage.getItem("user"))
    const [menu, setMenu] = useState(false)
    const [inputs, setInputs] = useState("")
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setInputs(e.target.value)
        dispatch(onChange({inputs}))
    }
  

    const handleLogout = () => {
        dispatch(logOut())
        setMenu(false)
    }



    return (
        <nav>
            <div className="nav-left">
                <Link to={"/"}>
                    <div className="logo">WriteWave</div>
                </Link>
                <ul>
                    <li>
                        <Link to={"/"}>
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>
                            CONTACT US
                        </Link>
                    </li>
                    <li>
                        <Link to={"/about"}>
                            ABOUT
                        </Link>
                    </li>
                </ul>

            </div>
            <div className="nav-right">
                <div className="search">
                    <input type="text" placeholder='Search here...' onChange={handleChange} />
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
                            <Link to={`/profile/${user?._id}`} style={{ color: "black" }}>
                                Add Post
                            </Link>
                        </li>
                        <li>
                            <Link to={`/profile/${user?._id}`} style={{ color: "black" }}>
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link to={"/profile"} style={{ color: "black" }}>
                                Settings
                            </Link>
                        </li>
                        <li onClick={handleLogout}>
                            LogOut
                        </li>

                    </div>
                }
            </div>
        </nav>
    )
}

export default Navber

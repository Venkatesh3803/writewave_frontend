import "./navber.css"
import { Link } from "react-router-dom"
import userImg from "../../assets/user.png"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { logOut } from "../../redux/authReducer"
import { useSearchContext } from "../../contextApi/searchInputContext"
import { IoMenu } from "react-icons/io5";
import { useNavigate } from "react-router-dom"
import { FaSearch } from "react-icons/fa";


const Navber = () => {
    const { searchQuery, setSearch, search } = useSearchContext();

    const user = JSON.parse(localStorage.getItem("user"))
    const [menu, setMenu] = useState(false)
    const [sideBar, setSideBar] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setSearch(e.target.value)

    }

    const handleLogout = () => {
        dispatch(logOut())
        setMenu(false)
    }

    useEffect(() => {
        if (search.length > 2) {
            navigate(`/blogs?search=${search}`)
        }
    }, [search])



    return (
        <nav>
            <div className="nav-left">
                <Link to={"/"}>
                    <div className="logo">WriteWave</div>
                </Link>
                {sideBar ?
                    <div className="sidebar">
                        <div className="cancel" onClick={(prev) => setSideBar(!prev)}>X</div>
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
                    </div>
                    :
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
                }

            </div>
            <div className="nav-right">
                <div className="search">
                    <input type="text" placeholder='Search here...' value={searchQuery} onChange={handleChange} />
                    <FaSearch />
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
                <IoMenu className="sidebar-icon" onClick={() => setSideBar(true)} />

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

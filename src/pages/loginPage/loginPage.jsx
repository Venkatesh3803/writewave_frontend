import { useState } from "react"
import "./loginPage.css"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../../requestMethods"
import bg from "../../assets/registerbg.png"


const LoginPage = () => {
    const dispatch = useDispatch()
    const err = useSelector((state) => state.user.error)
    const sucess = useSelector((state) => state.user.sucess)
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const reset = () => {
        setEmail("")
        setPassword("")
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        login(dispatch, { email, password })
        reset()
        if (sucess) {
            navigate("/")
        }
    }

    return (
        <div className='login'>
            <img src={bg} alt="" />
            <div className="login-container">
                <form action="" onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className="inputs">
                        <label htmlFor="email">Email :-</label>
                        <input type="email" name="" id="email" placeholder="Email" value={email} required onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="inputs">
                        <label htmlFor="password">Password :-</label>
                        <input type="password" id="password" placeholder="Password" value={password} required onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    {err && <p className="err">Invaild Credentials</p>}
                    <span>
                        <Link to={"/register"}>
                            Don't have Account! Sign Up
                        </Link>
                    </span>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage

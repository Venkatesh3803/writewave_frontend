import { useState } from "react"
import "./register.css"
import { Link, useNavigate } from 'react-router-dom'
import { register } from "../../requestMethods"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"


const Register = () => {
    const dispatch = useDispatch()
    const err = useSelector((state) => state.user.error)
    const sucess = useSelector((state) => state.user.sucess)
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [username, setUsername] = useState("")

    const reset = () => {
        setEmail("")
        setConfirmPassword("")
        setPassword("")
        setUsername("")
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            return toast.warn("Password Din't Match")
        }
        register(dispatch, { email, password, username })
        reset()

        if (sucess) {
            navigate("/login")
        }
    }

    return (
        <div className='register'>
            <div className="register-container">
                <form action="" onSubmit={handleSubmit}>
                    <div className="inputs">
                        <label htmlFor="email">Email :-</label>
                        <input type="email" name="" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="inputs">
                        <label htmlFor="username">Username :-</label>
                        <input type="text" name="" id="username" placeholder="User name" onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="inputs">
                        <label htmlFor="password">Password :-</label>
                        <input type="password" name="" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="inputs">
                        <label htmlFor="confirmPass">Confirm Pass :-</label>
                        <input type="password" name="" id="confirmPass" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>

                    {err && <p className="err">This Email is Already taken try with Differnt Email</p>}
                    <span>
                        <Link to={"/login"}>
                            Already have Account ! Login In
                        </Link>
                    </span>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Register

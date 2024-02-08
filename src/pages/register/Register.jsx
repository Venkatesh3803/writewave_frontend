import { useState } from "react"
import "./register.css"
import { Link, useNavigate } from 'react-router-dom'
import { register } from "../../requestMethods"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import bg from "../../assets/registerbg.png"


const Register = () => {
    const dispatch = useDispatch()
    const { error, sucess } = useSelector((state) => state.user)

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

        if (sucess === true) {
            navigate("/login")
        }
    }

    return (
        <div className='register'>
            <img src={bg} alt="" />
            <div className="register-container">
                <h1>Sign Up</h1>
                <form action="" onSubmit={handleSubmit}>
                    <div className="inputs">
                        <label htmlFor="email">Email :-</label>
                        <input type="email" value={email} id="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="inputs">
                        <label htmlFor="username">Username :-</label>
                        <input type="text"value={username} id="username" placeholder="User name" required onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="inputs">
                        <label htmlFor="password">Password :-</label>
                        <input type="password"value={password} id="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="inputs">
                        <label htmlFor="confirmPass">Confirm Pass :-</label>
                        <input type="password" value={confirmPassword} id="confirmPass" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>

                    {error && <p className="err">This Email is Already taken try with Differnt Email</p>}
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

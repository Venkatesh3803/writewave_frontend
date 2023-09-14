import { useState } from "react"
import "./loginPage.css"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { login } from "../../requestMethods"


const LoginPage = () => {
    const err = false
    const dispatch = useDispatch()


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const reset = () => {
        setEmail("")
        setPassword("")
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("submited")
        login(dispatch, { email, password })
        reset()
   
    }

    return (
        <div className='login'>
            <div className="login-container">
                <form action="" onSubmit={handleSubmit}>
                    <div className="inputs">
                        <label htmlFor="email">Email :-</label>
                        <input type="email" name="" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="inputs">
                        <label htmlFor="password">Password :-</label>
                        <input type="password" name="" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
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

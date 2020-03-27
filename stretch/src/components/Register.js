import React, { useState } from 'react'
import { useHistory} from "react-router-dom"
import { axiosWithAuth } from "../utils/axiosWithAuth"

const Register = () => {
    const [register, setRegister] = useState({
        username: "",
        password: ""
    })

    const history = useHistory();

    const handleChange = e => {
        e.preventDefault();
        setRegister({
            ...register, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("api/auth/register", register)
            .then(res => {
                window.localStorage.setItem('token', res.data.payload)
                history.push("/")
            })
            .catch(err => {
                console.log(err)
            })
    }

    return(
        <div>
            <div className="registerContainer">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input
                    type="text"
                    id="username"
                    name="username"
                    value={register.username}
                    onChange={handleChange}
                    required
                    />

                    <label htmlFor="password">Password:</label>
                    <input 
                    type="password"
                    id="password"
                    name="password"
                    value={register.password}
                    onChange={handleChange}
                    required
                    />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Register
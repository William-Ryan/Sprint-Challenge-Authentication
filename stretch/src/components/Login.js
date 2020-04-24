import React, { useState } from "react"
import {Link} from "react-router-dom"
import { useHistory } from "react-router-dom"
import { axiosWithAuth } from "../utils/axiosWithAuth"
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Login = () => {
    const [login, setLogin] = useState({
        username:"",
        password:""
    })

    const history = useHistory()

    const handleChange = e => {
        e.preventDefault();
        setLogin({
            ...login, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post(`api/auth/login`, login)
            .then(res => {
                window.localStorage.setItem('token', res.data.token)
                history.push('/jokes')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <h1>Login Here</h1>
            <div className="loginContainer">
                <Form inline onSubmit={handleSubmit} style={{justifyContent: 'center'}}>
                    <FormGroup>
                        <Label htmlFor="username">Username:</Label>
                        <Input
                            type="text"
                            name="username"
                            label="username"
                            value={login.username}
                            onChange={handleChange}
                            className="input"
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="password">Password:</Label>
                        <Input 
                            type="password"
                            name="password"
                            label="password"
                            value={login.password}
                            onChange={handleChange}
                            className="input"
                            required
                        />
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                </Form>
                <h6>Don't have an account yet? <Link to="/register">Sign up here!</Link></h6>
            </div>
        </div>
    )
}

export default Login
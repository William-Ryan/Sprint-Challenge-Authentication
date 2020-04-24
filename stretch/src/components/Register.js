import React, { useState } from 'react'
import { useHistory} from "react-router-dom"
import { axiosWithAuth } from "../utils/axiosWithAuth"
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

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
            <h1>Registration Page</h1>
            <div className="registerContainer">
                <Form inline onSubmit={handleSubmit} style={{justifyContent: 'center'}}>
                    <FormGroup>
                        <Label for="username">Username:</Label>
                        <Input
                        type="text"
                        id="username"
                        name="username"
                        value={register.username}
                        onChange={handleChange}
                        required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password:</Label>
                        <Input 
                        type="password"
                        id="password"
                        name="password"
                        value={register.password}
                        onChange={handleChange}
                        required
                        />
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        </div>
    )
}

export default Register
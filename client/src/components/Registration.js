import React, { useState } from 'react';
import { Link, navigate } from '@reach/router'
import axios from 'axios';



const Registration = (props) => {

    const [confirmReg, setConfirmReg] = useState("");
    const [errors, setErrors] = useState({});
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const register = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/users/register",
                user,
                {
                    withCredentials: true,
                },
            )
            .then((res) => {
                console.log(res.data);
                setUser({
                    username: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                });
                navigate("/login")
                
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
            });
    };



    return (
        <div>
            <div className="homePageHeader">
                <h1>GUITARig</h1>
                <Link className="link" to={"/"}>Return to HomePage</Link>
            </div>
            <h3>Register here</h3>
            {confirmReg ? <h4>{confirmReg}</h4> : null}
            <form className="userInfoForm" onSubmit={register} >
                <div className="input">
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={user.username}
                        onChange={handleChange}
                        />
                        {errors.username ? (
                            <span className="require">
                                {errors.username.message}
                            </span>
                        ) : null}
                </div>
                <div className="input">
                    <label>Email:</label>
                    <input
                        type="text"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        />
                        {errors.email ? (
                            <span className="require">
                                {errors.email.message}
                            </span>
                        ) : null}
                </div>
                <div className="input">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        />
                        {errors.password ? (
                            <span className="require">
                                {errors.password.message}
                            </span>
                        ) : null}
                </div>
                <div className="input">
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={user.confirmPassword}
                        onChange={handleChange}
                        />
                        {errors.confirmPassword ? (
                            <span className="require">
                                {errors.confirmPassword.message}
                            </span>
                        ) : null}
                </div>
                <button id="submit" type="submit">Register</button>
            </form>
        </div>
    )
}

export default Registration;

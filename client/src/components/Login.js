import React, { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router'
import axios from 'axios';



const Login = (props) => {
    const { id } = props;
    const { localStorageId, setLocalStorageId } = props
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    



    const login = (e) => {
        e.preventDefault();
        axios
            .post(
                "http://localhost:8000/api/users/login",
                {
                    email,
                    password,
                },
                {
                    withCredentials: true,
                },
            )
            .then((res) => {
                console.log(res, "res");
                console.log(res.data, "is res data");
                localStorage.setItem("userId", res.data.userId);
                setLocalStorageId(res.data.userId)
                navigate(`/user/${localStorage.userId}`);

            })
            .catch((err) => {
                console.log(err.response.data);
                setErrorMessage(err.response.data.message);
            });

    }
    



    return (
        <div>
            <div className="homePageHeader">
                <h1>GUITARig</h1>
                <Link className="link" to={"/"}>Return to HomePage</Link>
            </div>
            <h3>Please provide your login information</h3>
            <form className="userInfoForm" onSubmit={login}>
                <div className="input">
                    <label>Email:</label>
                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button id="submit" type="submit">Login</button>
            <p className="error">{errorMessage ? errorMessage : ""} </p>
            </form>
        </div>
    )
}

export default Login;
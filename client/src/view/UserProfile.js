import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import UserForm from '../components/UserForm';
import UserDisplay from '../components/UserDisplay';



const UserProfile = (props) => {

    // const {id} = props
    const { setupList, setSetupList } = props
    const { localStorageId, setLocalStorageId } = props
    const { errors, setErrors } = props

    const logout = (e) => {
        e.preventDefault();
        axios
            .post(
                "http://localhost:8000/api/users/logout",
                {},
                {
                    withCredentials: true,
                },

            )
            .then((res) => {
                console.log(res.data);
                localStorage.removeItem("userId");
                navigate("/")
            })
            .catch((err) => {
                console.log(err)
                setErrors(err.message.data.errors)
            });
    };

    return (
        <div>
            <div className="homePageHeader">
                <h1>GUITARig</h1>
                <div>
                    <Link className="link" to={"/user/displayAll"}>Check Out Setups</Link>
                    <button id="logout"onClick={logout}>LOGOUT</button>
                </div>
            </div >
            <div className="userFlex">
                <UserForm
                    setupList={setupList}
                    setSetupList={setSetupList}
                    errors={errors}
                    setErrors={setErrors} />
                <UserDisplay localstorageId={localStorageId} setLocalStorageId={setLocalStorageId} />
            </div>
        </div>
    )
}


export default UserProfile;
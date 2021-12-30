import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';



const HomePage = (props) => {

    const { setupList, setSetupList } = props

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/setups")
            .then((res) => {
                console.log(res.data);
                setSetupList(res.data);
            })
            .catch((err) => console.log(err));
    }, []);


    return (
        <div>
            <div className="homePageHeader">
                <h1>GUITARig</h1>
                <div>
                    <Link to={"/login"}>
                    <button >LOGIN</button>
                    </Link>
                    <Link to={"/register"}>
                    <button>NEW USER</button>
                    </Link>
                </div>
            </div>
            <div>
            <h3>Login or sign up to share and view guitar setups!</h3>
                <div className="displayBody">
                    {
                        setupList ?
                            setupList.map((setup, index) => (
                                <div key="index" className="setupView">
                                    <img src={setup.image} alt="image of guitar setup" className="displayAllImage" />
                                    <p>{setup.title}</p>
                                    <p>Added By: {setup.createdBy?.username}</p>
                                </div>
                            ))
                            : null
                    }
                </div>
            </div>
        </div>

    )
}

export default HomePage;
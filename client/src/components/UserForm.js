import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import Form from './Form';



const UserForm = (props) => {

    const { setupList, setSetupList } = props
    const [setup, setSetup] = useState({
        title: "",
        guitar: "",
        amplifier: "",
        image: "",
        description: ""
    });


    const handleChange = (e) => {
        setSetup({
            ...setup,
            [e.target.name]: e.target.value
        });
    };



    const submitHandler = (e) => {
        // e.preventDefault();
        axios
            .post("http://localhost:8000/api/setups",
                setup,
                {withCredentials: true}
            )
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setSetupList([...setupList, res.data]);
                setSetup({
                    title: "",
                    guitar: "",
                    amplifier: "",
                    image: "",
                    description: ""
                },
                
                
                )
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <h2>Welcome to GUITARig</h2>
            <div>
                <Form submitHandler={submitHandler} handleChange={handleChange} setup={setup} setSetup={setSetup} text={<h3>Add a new Setup</h3>} />
            </div>
        </div>
    )
}


export default UserForm;
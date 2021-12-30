import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import Form from './Form';






const EditSetup = (props) => {

    const { id } = props

    const [updatedSetup, setUpdatedSetup] = useState({
        title: "",
        guitar: "",
        amplifier: "",
        image: "",
        description: ""
    });

    const handleChange = (e) => {
        setUpdatedSetup({
            ...updatedSetup,
            [e.target.name]: e.target.value
        });
    };

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/setups/${id}`)
            .then((res) => {
                console.log(res.data);
                setUpdatedSetup(res.data)
            })
            .catch((err) => console.log(err))
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/setups/${id}`, updatedSetup)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate(`/user/${localStorage.userId}`)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const deleteFilter = (setupId) => {
        axios.delete(`http://localhost:8000/api/setups/${setupId}`)
            .then((res) => {
                console.log(res.data);
                navigate(`/user/${localStorage.userId}`)
            })
            .catch((err) => {
                console.log(err)
            })
    }



    return (
        <div>
            <div className="homePageHeader">
                <h1>GUITARig</h1>
                <div>
                    <Link className="link" to={"/user/displayAll"}>Check Out Other Setups</Link>
                </div>
            </div>
            <div className="flexEdit">
                <div id="editForm">
                    <Form  submitHandler={submitHandler} handleChange={handleChange} setup={updatedSetup} setSetup={setUpdatedSetup} text={"Edit Setup"} />
                    <button id="delete" onClick={() => deleteFilter(updatedSetup._id)}>Delete</button>
                </div>
                <div className="displayOne" id="displayEdit">
                    <div>
                        <div className="displayOneFlex" id="displayEdit">
                            <div>
                                <h3>{updatedSetup.title}</h3>
                                <p>{updatedSetup.guitar}</p>
                                <p>{updatedSetup.amplifier}</p>
                            </div>
                            <img className="displayOneImg" src={updatedSetup.image} alt="picture of setup" />
                            <p className="description">{updatedSetup.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default EditSetup;
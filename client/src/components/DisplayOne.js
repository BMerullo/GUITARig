import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import Form from './Form';







const EditSetup = (props) => {

    const { id } = props

    // const [setup, setSetup] = useState({
    //     title: "",
    //     guitar: "",
    //     amplifier: "",
    //     image: "",
    //     description: "",
    //     likes: "",

    // });
    const [title, setTitle] = useState("");
    const [guitar, setGuitar] = useState("");
    const [amplifier, setAmplifier] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [likes, setLikes] = useState("");

    const [hasLiked, setHasLiked] = useState(false);



    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/setups/${id}`)
            .then((res) => {
                console.log(res.data);
                setTitle(res.data.title)
                setGuitar(res.data.guitar)
                setAmplifier(res.data.amplifier)
                setImage(res.data.image)
                setDescription(res.data.description)
                setLikes(res.data.likes)
            })
            .catch((err) => console.log(err))
    }, [])
    const likeHandler = (e) => {
        // e.preventDefault();
        setLikes(likes + 1)

        setHasLiked(!hasLiked)

        axios
            .put(`http://localhost:8000/api/setups/${id}`,
                title,
                guitar,
                amplifier,
                image,
                description,
                likes
            )
            .then((res) => {
                console.log(res);
                console.log(res.data);

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
                    <Link className="link" to={"/user/displayAll"}>See what other guitar players are using</Link>
                    
                </div>
            </div>
            <div className="flexEdit">
                {
                    hasLiked === false ?
                        <button className="likeButton" onClick={likeHandler}>Like this setup</button>
                        : <buton className="submit" disabled>You Like This Setup</buton>
                }
                <div>
                    <div className="displayOne">
                        <div>
                            <div className="displayOneFlex">
                            <div>
                                <h3>{title}</h3>
                                <p>{guitar}</p>
                                <p>{amplifier}</p>
                            </div>
                                <img className="displayOneImg" src={image} alt="picture of setup" />
                            </div>
                            <p>Likes: {likes}</p>
                            <p className="description">{description}</p>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default EditSetup;
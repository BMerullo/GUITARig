import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from '@reach/router';



const UserDisplay = (props) => {
    const { localStorageId, setLocalStorageId } = props
    const [userList, setUserList] = useState([])
    const { setup, setSetup } = props

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/user/setups/${localStorage.userId}`)
            .then((res) => {
                console.log(res.data);
                setUserList(res.data);
            })
            .catch((err) => {
                console.log(err)
            });
    }, [])




    return (
        <div className="displayBody">
            {
                userList.map((setup, index) => (
                    <div key="index" className="setupView">
                        <img src={setup.image} alt="image of guitar setup" className="displayAllImage" />
                        <Link className="link" to={`/edit/${setup._id}`}>
                            <p className="setupLink">{setup.title}</p>
                        </Link>
                        <p>{setup.guitar}</p>
                        <p>{setup.amplifier}</p>
                        <p>Likes: {setup.likes}</p>
                    </div>
                ))
            }
        </div>
    )
}


export default UserDisplay;
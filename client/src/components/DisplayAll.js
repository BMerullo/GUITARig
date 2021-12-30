import React, { useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';



const DisplayAll = (props) => {


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
                    {
                        <Link className="link" to={`/user/${localStorage.userId}`}>
                            <button>Profile Page</button>
                        </Link>
                    }
                </div>

            </div>
            <div>
                <h3>Descover new Guitar Setups</h3>
                <div className="displayBody">
                    {
                        setupList ?
                            setupList.map((setup, index) => (
                                <div key="index" className="setupView">
                                    <img src={setup.image} alt="image of guitar setup" className="displayAllImage" />
                                    <Link className="link" to={`/user/displayAll/displayOne/${setup._id}`}>
                                        <p className="setupLink">{setup.title}</p>
                                    </Link>
                                    <p>Created by: {setup.createdBy?.username}</p>
                                    {/* <Link to={`/user/${setup.createdBy?._id}`}>
                                    </Link> */}
                                    <p>Likes {setup.likes}</p>
                                </div>
                            ))
                            : null
                    }
                </div>
            </div>
        </div>
    )
}


export default DisplayAll;
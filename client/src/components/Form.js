import React, { useState } from 'react';



const Form = (props) => {
    const { errors, setErrors } = props
    const { submitHandler, setup, setSetup, handleChange, text } = props


    return (
        <form className="setupForm" onSubmit={submitHandler} >
            <p>{text}</p>
            <div className="input">
                <label>Title</label>
                <input
                    type="text"
                    name="title"
                    value={setup.title}
                    onChange={handleChange} />
            </div>

            {setup.title.length <3 ? <p className="require">Title required</p> : null}

            <div className="input">
                <label>Guitar</label>
                <input
                    type="text"
                    name="guitar"
                    value={setup.guitar}
                    onChange={handleChange} />
            </div>
                {setup.guitar.length <3? <p className="require">Guitar Required</p> : null}
            <div className="input">
                <label>Amplifier</label>
                <input
                    type="text"
                    name="amplifier"
                    value={setup.amplifier}
                    onChange={handleChange} />
            </div>
                {setup.amplifier.length <3? <p className="require">Amplifier Required</p> : null}
            <div className="input">
                <label>Image URL</label>
                <input
                    type="text"
                    name="image"
                    value={setup.image}
                    onChange={handleChange} />
            </div>
            {setup.image.length <3? <p className="require">Image Required</p> : null}
            <label>Additional Gear and Description</label>
            <br />
            <textarea
                className="descriptionBox"
                type="textarea"
                name="description"
                value={setup.description}
                onChange={handleChange} />

            <br />
            <button type="submit">SUBMIT</button>
        </form>
    )
}

export default Form;
import React from "react";
import { useState } from 'react';


function WhForm() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const onTitleChange = (event) => {
        setTitle(event.target.value);
        console.log(title);
    }

    const onDescriptionChange = (event) => {
        setDescription(event.target.value);
        console.log(description);
    }

    const onFormSubmit = (event) => {
        let data = {
            title: title,
            description: description
        }

        console.log(data);
        event.preventDefault();
    }

    return (
        <div className="container my-4">
            <h1>WH</h1>
            <form onSubmit={onFormSubmit}>
                <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    name='title'
                    placeholder='title'
                    value={title}
                    onChange={onTitleChange}
                />

                <label htmlFor="exampleInputEmail1" className="form-label">Description</label>
                <textarea type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    name='description'
                    placeholder='description'
                    value={description}
                    onChange={onDescriptionChange}
                />

                <input type='submit' onClick={onFormSubmit} />
            </form>

        </div>
    );
}

export default WhForm;
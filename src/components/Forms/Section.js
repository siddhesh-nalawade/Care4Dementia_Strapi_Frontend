import React from "react";
import { useState } from 'react';

function Section({ handlers, whIndex }) {
    const [title, setTitle] = useState('');
    const [inputFields, setInputFields] = useState([
        { sub_heading: '', data: '' }
    ])

    const onTitleChange = (event) => {
        setTitle(event.target.value);
        let data = {
            title: event.target.value,
            sub_section: inputFields
        }
        handlers.handleFormSubmit(data, whIndex);
    }

    const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);

        let temp = {
            title: title,
            sub_section: data
        }
        handlers.handleFormSubmit(temp, whIndex);
    }

    const addFields = () => {
        let newfield = { sub_heading: '', data: '' }
        setInputFields([...inputFields, newfield])
        console.log("added");
    }

    const removeFields = (index) => {
        let data = [...inputFields];
        data.splice(index, 1)
        console.log('delete' + index);
        setInputFields(data);


    }

    return (
        <div className="container my-4">
            <form onSubmit={handlers.submit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        name='title'
                        placeholder='title'
                        value={title}
                        onChange={onTitleChange}
                    />
                </div>
                {inputFields.map((input, index) => {
                    return (
                        <div key={index}>
                            <label htmlFor="exampleInputEmail1" className="form-label">Sub Heading</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                name='sub_heading'
                                placeholder='sub_heading'
                                value={input.sub_heading}
                                onChange={event => handleFormChange(index, event)}
                            />

                            <label htmlFor="exampleInputEmail1" className="form-label">Data</label>
                            <textarea type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                name='data'
                                placeholder='data'
                                value={input.data}
                                onChange={event => handleFormChange(index, event)}
                            />

                            <input
                                type='button'
                                value='remove'
                                onClick={() => removeFields(index)}
                            />
                            <hr />
                        </div>

                    )
                })}

                <button
                    type='submit'
                    onClick={handlers.submit}
                >Submit</button>
            </form>
            <button onClick={addFields} >Add More..</button>
        </div>
    );

}

export default Section;
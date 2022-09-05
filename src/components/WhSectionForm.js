import React from 'react'
import Section from './Forms/Section'
import { useState } from 'react';

function WhSectionForm() {
    const [data, setData] = useState([{
        title: '',
        sub_section: { sub_heading: '', data: '' }
    }]);

    const addMoreSection = () => {
        let newSection = {
            title: '',
            sub_section: { sub_heading: '', data: '' }
        }

        setData([...data, newSection]);

    }

    const handleFormSubmit = (formData, whIndex) => {
        // console.log(formData)
        // console.log(whIndex);
        let temp = data;
        data[whIndex] = formData;
        setData(temp);
        console.log(data);

    }

    const submit = () => {
        console.log(data);
    }
    return (
        <>
            <h1>WH</h1>
            <button onClick={addMoreSection}>Add Section</button>
            {
                data.map((section, index) => {
                    return (
                        <div key={index}>
                            <Section handlers={{ handleFormSubmit: handleFormSubmit, submit: submit }} whIndex={index} />
                        </div>
                    );
                })
            }

        </>
    );
}


export default WhSectionForm;

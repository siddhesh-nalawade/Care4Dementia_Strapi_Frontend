import React from 'react'
import Section from './Forms/Section';
import { useState } from 'react';



function GcspForm() {

    const [data, setData] = useState({
        title: '',
        sub_section: { sub_heading: '', data: '' }
    });

    const handleFormSubmit = (formData, whIndex) => {
        // console.log(formData);
        setData(formData);
    }

    const submit = (event) => {
        event.preventDefault();
        console.log('submit');

        console.log(data);
        setData(
            {
                title: '',
                sub_section: { sub_heading: '', data: '' }
            }
        );

    }

    return (
        <>
            <h1>GCSP</h1>
            <Section handlers={{ handleFormSubmit: handleFormSubmit, submit: submit }} whIndex={-1} />
        </>
    );
}


export default GcspForm;

import React, {useState} from 'react';
import ResultsContainer from './ResultsContainer';
import FormContainer from './FormContainer';

export default function MainContainer({getPerson}) {
    const [gender, setGender] = useState("");
    const [country, setCountry] = useState("");
    const [age, setAge] = useState("");
    const [formState, setFormState] = useState("empty");
    const handleFormSubmit = formData => {
        setFormState("loading");
        const promise = new Promise((resolve, reject) =>
        {
        getPerson(formData.nameInput).then(p => {
            if (p.age) {
                console.log(p)
                setCountry(p.country);
                setAge(p.age);
                setGender(p.gender);
                resolve("valid")
            } else {
                reject("invalid")
            }
        })
    })
    promise.then(state => {
        setFormState(state);
    }).catch((e => {
        setFormState("invalid")
        console.log("error: ", e)
    }));
    }
    return (
        <>
            <FormContainer onSubmit={handleFormSubmit} />
            <ResultsContainer gender={gender} country={country} age={age} state={formState}/>
        </>
    )
}
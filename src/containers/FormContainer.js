import React from 'react';

export default function FormContainer({onSubmit}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(Object.fromEntries(new FormData(e.target).entries()));
    }
    const [name, setName] = React.useState("")
    const handleChange = e => {
        setName(e.target.value)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="nameInput" value={name} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    )
}
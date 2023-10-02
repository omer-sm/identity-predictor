import React from 'react';
import styles from './FormContainer.module.css'

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
        <form className={styles.FormContainer} onSubmit={handleSubmit}>
            <h4 className={styles.TopText} >Enter your name, and find out who the computer thinks you are!</h4>
            <input className={styles.NameInput} type="text" name="nameInput" value={name} onChange={handleChange} autoComplete="off" placeholder="Name..."/>
            <button className={styles.SubmitButton} type="submit">Predict!</button>
        </form>
    )
}
import React, {useEffect} from 'react';

export default function NameInput() {
    const [name, setName] = React.useState("")
    const handleChange = e => {
        setName(e.target.value)
    }
    /*useEffect(() => {
        addEventListener("keydown", e => {
            if (e.key === "Enter") {
                handleSubmit()
            }
        })
        return () => {
            removeEventListener("keydown", handleSubmit)
        }
    }, [])*/
    return (
        <input type="text" value={name} onChange={handleChange} />
    )
}
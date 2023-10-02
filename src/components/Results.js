import React from "react";

export default function Results({gender, country, age, state}) {
    switch (state) {
        case "loading":
            return <h3>Loading...</h3>
        case "valid":
            return (
                <>
                    <h3>Predicted gender: {gender}</h3>
                    <h3>Predicted country: {country}</h3>
                    <h3>Predicted age: {age}</h3>
                </>
            )
        case "invalid":
            return <h3>Invalid response from api :(</h3>
        case "empty":
                return <h3>Please enter a name</h3>
        default:
            return <h3>Something went really wrong lmao state: {state}</h3>;
    }
}
import React from "react";
import NonResponseText from "../components/NonResponseText";
import LoadingIndicator from "../components/LoadingIndicator";
import ResultCard from "../components/ResultCard";
import styles from "./ResultsContainer.module.css";

export default function ResultsContainer({gender, country, age, state}) {
    switch (state) {
        case "loading":
            return <LoadingIndicator />;
        case "valid":
            return (
                <div className={styles.ResultCardContainer}>
                    <ResultCard resultName="gender" resultValue={gender} />
                    <ResultCard resultName="country" resultValue={country} />
                    <ResultCard resultName="age" resultValue={age} />
                </div>
            )
        case "invalid":
            return <NonResponseText message={"Invalid response from API"} subMessage={"Please try again later or input a different name"}/>
        case "empty":
                return 
        default:
            return <NonResponseText message={"Something went really wrong"} subMessage={`state: ${state}`}/>
    }
}
import React from "react";
import styles from "./ResultCard.module.css";

export default function ResultCard({resultName, resultValue}) {
    return (
        <div className={styles.ResultCard}>
            <h3 className={styles.ResultText}>Predicted {resultName}: {resultValue}</h3>
        </div>
    )
}
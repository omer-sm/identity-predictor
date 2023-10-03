import React from "react";
import styles from "./TitleComponent.module.css";

export default function TitleComponent() {
    return (
        <div className={styles.AppTitle}>
            <h1 className={styles.Title}>Identity Predictor</h1>
        </div>
    )
}
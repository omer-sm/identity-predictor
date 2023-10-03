import React from "react";
import styles from "./LoadingIndicator.module.css";

export default function LoadingIndicator() {
    return (
        <div className={styles.Div}>
            <span className={styles.Dot1}></span>
            <span className={styles.Dot2}></span>
            <span className={styles.Dot3}></span>
        </div>
    )
}
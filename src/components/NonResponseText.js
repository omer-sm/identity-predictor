import React from "react";
import styles from "./NonResponseText.module.css";

export default function NonResponseText({message, subMessage}) {
    return (
        <div className={styles.div}> 
            <h3 className={styles.MessageText}>{message}</h3>
            <h6 className={styles.SubMessageText}>{subMessage}</h6>
        </div>
    )
}
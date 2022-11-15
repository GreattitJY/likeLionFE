import React from "react";
// import "./one.css";
import styles from "./one.module.css";

export default function One() {
    return (
        <section>
            <h2>hello world</h2>
            <p className={styles.contents}>hello world</p>
        </section>
    );
}

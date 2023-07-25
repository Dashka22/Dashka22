// Navbar.js
import React from "react";
import styles from "./navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.grid}>
      <p className={styles.logo}>FASHION</p>
      <div className={styles.flex}>
        <div className={styles.text}>CATALOG</div>
        <div className={styles.text}>FASHION</div>
        <div className={styles.text}>FAVOURITE</div>
        <div className={styles.text}>LIFESTYLE</div>
        <button className={styles.button}>SIGN UP</button>
      </div>
    </div>
  );
};

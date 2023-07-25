import styles from "./banner.module.css";

export const Banner = () => {
  return (
    <div className={styles.container}>
      <p className={styles.topText}>LET'S EXPLORE UNIQUE CLOTHES</p>

      <p className={styles.bottomText}>Live for Influential and Innovative fashion!</p>
      <button className={styles.button}>SHOP NOW</button>
    </div>
  );
};

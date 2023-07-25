import { useState } from "react";
import { Calculator } from "../calculator";
import styles from "./modal.module.css";

export const Modal = () => {
  const [visible, setVisible] = useState(false);

  const handleVisible = () => {
    setVisible(!visible);
  };

  if (!visible) {
    return (
      <div className={styles.calculatorButton}>
        <button className={styles.showButton} onClick={handleVisible}>
          Calc
        </button>
      </div>
    );
  }

  return (
    <div className={styles.modal}>
      <Calculator handler={handleVisible} />
    </div>
  );
};

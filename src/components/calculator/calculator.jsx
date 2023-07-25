import { useState } from "react";
import styles from "./calculator.module.css";

const symbols = ["/", "+", "*", "-"];

export const Calculator = ({ handler }) => {
  const [values, setValues] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (text) => {
    const isLastAndValueAreSymbol =
      symbols.includes(text) && symbols.includes(values[values.length - 1]);

    if (result !== "") {
      setResult("");
    }

    if (isLastAndValueAreSymbol) {
      setValues((prev) => prev.slice(0, -1) + text);
    } else {
      setValues((prev) => prev + text);
    }
  };

  const handleCalculate = () => {
    if (symbols.includes(values[values.length - 1])) {
      setValues(values.slice(0, -1));
    } else {
      setResult("= " + eval(values));
    }
  };

  const handleClear = () => {
    setValues("");
    setResult("");
  };

  const handleRemoveLast = () => {
    setValues(values.slice(0, -1));
    setResult("");
  };

  return (
    <div className={styles.container}>
      <button className={styles.closeButton} onClick={handler}>
        X
      </button>

      <div style={{ width: "100%", height: "300px" }}>
        <p className={styles.textP}>{values}</p>
        <p className={styles.answerP}>{result}</p>
      </div>

      <div className={styles.grid}>
        {/* first row */}
        <button
          className={`${styles.button} ${styles.topLeftSymbol}`}
          onClick={handleClear}
        >
          Ac
        </button>
        <button
          className={`${styles.button} ${styles.topLeftSymbol}`}
          onClick={handleRemoveLast}
        >
          B
        </button>
        <button
          className={`${styles.button} ${styles.symbol}`}
          onClick={() => handleClick("/")}
        >
          /
        </button>
        <button
          className={`${styles.button} ${styles.symbol}`}
          onClick={() => handleClick("*")}
        >
          *
        </button>
        {["7", "8", "9"].map((symbol, i) => (
          <button
            key={i}
            className={styles.button}
            onClick={() => handleClick(symbol)}
          >
            {symbol}
          </button>
        ))}
        <button
          className={`${styles.button} ${styles.symbol}`}
          onClick={() => handleClick("-")}
        >
          -
        </button>
        {["4", "5", "6"].map((number, i) => (
          <button
            key={i}
            className={styles.button}
            onClick={() => handleClick(number)}
          >
            {number}
          </button>
        ))}
        {["1", "2", "3"].map((number, i) => (
          <button
            key={i}
            className={styles.button}
            onClick={() => handleClick(number)}
          >
            {number}
          </button>
        ))}
        <button
          className={`${styles.button} ${styles.number} ${styles.zero}`}
          onClick={() => handleClick("0")}
        >
          0
        </button>
        <button
          className={`${styles.button} ${styles.number}`}
          onClick={() => handleClick(".")}
        >
          .
        </button>
        <div className={styles.rightBotSide}>
          <button
            className={`${styles.button} ${styles.symbol}`}
            onClick={() => handleClick("+")}
          >
            +
          </button>
          <button
            className={`${styles.button} ${styles.equal}`}
            onClick={handleCalculate}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

import styles from "./FinishScreen.module.css";
import iconHTML from "../../assets/images/icon-html.svg";
import Button from "../Button/Button";

function FinishScreen() {
  return (
    <div className={styles.finish}>
      <div className={styles.heading}>
        <p>Quiz Completed</p>
        <h2>You scored...</h2>
      </div>

      <div className={styles.score}>
        <div className={styles.card}>
          <div className={styles.title}>
            <img src={iconHTML} alt="iconHTML" />
            <h2>HTML</h2>
          </div>
          <h1>X</h1>
          <p>out of X</p>
        </div>
        <button>Play Again</button>
      </div>
    </div>
  );
}

export default FinishScreen;

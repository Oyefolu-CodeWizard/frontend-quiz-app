import styles from "./FinishScreen.module.css";
import iconHTML from "../../assets/images/icon-html.svg";

function FinishScreen() {
  return (
    <div className={styles.finish}>
      <div>
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
      </div>
    </div>
  );
}

export default FinishScreen;

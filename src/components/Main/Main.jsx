import StartScreen from "../StartScreen/StartScreen";
import styles from "./Main.module.css";

function Main() {
  return (
    <div className={styles.main}>
      <div>
        <h2>
          <span className={styles.thinText}>Welcome to the</span> <br />
          <span>Frontend Quiz!</span>
        </h2>
        <p className={styles.subTitle}>Pick a Subject to get started.</p>
      </div>

      <StartScreen />
    </div>
  );
}

export default Main;

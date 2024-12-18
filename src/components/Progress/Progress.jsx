import { useQuiz } from "../../contexts/QuizContext";
import styles from "./Progress.module.css";

function Progress({ numQuestion }) {
  const { index, answer } = useQuiz();
  return (
    <header className={styles.progress}>
      <progress
        max={numQuestion}
        value={index + 1}
        className={styles.progressBar}
      ></progress>
    </header>
  );
}

export default Progress;

import { useQuiz } from "../../contexts/QuizContext";
import styles from "./Progress.module.css";

function Progress({ numQuestion, isSubmitted }) {
  const { index } = useQuiz();
  return (
    <header className={styles.progress}>
      <progress
        max={numQuestion}
        value={index + Number(isSubmitted)}
        className={styles.progressBar}
      ></progress>
    </header>
  );
}

export default Progress;

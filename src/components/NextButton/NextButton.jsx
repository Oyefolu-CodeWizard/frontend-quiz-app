import { useQuiz } from "../../contexts/QuizContext";
import styles from "./NextButton.module.css";

function NextButton({ numQuestion }) {
  const { dispatch, index } = useQuiz();

  if (index < numQuestion - 1)
    return (
      <button
        className={styles.next}
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next Question
      </button>
    );

  if (index === numQuestion - 1)
    return (
      <button
        className={styles.next}
        onClick={() => dispatch({ type: "finish" })}
      >
        Show My Score
      </button>
    );
}

export default NextButton;

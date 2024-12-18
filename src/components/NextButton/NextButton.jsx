import { useQuiz } from "../../contexts/QuizContext";
import styles from "./NextButton.module.css";

function NextButton() {
  const { dispatch } = useQuiz();
  return (
    <button
      className={styles.next}
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next Question
    </button>
  );
}

export default NextButton;

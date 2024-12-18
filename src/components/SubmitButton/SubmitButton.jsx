import { useQuiz } from "../../contexts/QuizContext";
import styles from "./SubmitButton.module.css";

function SubmitButton({ onSubmit }) {
  // const { dispatch, answer } = useQuiz();

  return (
    <button className={styles.submit} onClick={onSubmit}>
      Submit answer
    </button>
  );
}

export default SubmitButton;

import styles from "./FinishScreen.module.css";
import { useQuiz } from "../../contexts/QuizContext";
import { Link } from "react-router-dom";

function FinishScreen({ icon, title, questions, answers, backgroundColor }) {
  const { dispatch } = useQuiz();

  const score = questions.reduce(
    (acc, question, index) =>
      acc + (question.options[answers[index]] === question.answer ? 1 : 0),
    0
  );

  return (
    <div className={styles.finish}>
      <div className={styles.heading}>
        <p>Quiz Completed</p>
        <h2>You scored...</h2>
      </div>

      <div className={styles.score}>
        <div className={styles.card}>
          <div className={styles.title}>
            <img
              src={icon}
              alt={title}
              style={{ backgroundColor: backgroundColor }}
            />
            <h2>{title}</h2>
          </div>
          <h1>{score}</h1>
          <p>out of {questions.length}</p>
        </div>
        <Link to="/">
          <button onClick={() => dispatch({ type: "playAgain" })}>
            Play Again
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FinishScreen;

import { useQuiz } from "../../contexts/QuizContext";
import Option from "../Option/Option";
import Progress from "../Progress/Progress";
import styles from "./Question.module.css";

function Question({ questions }) {
  const { index } = useQuiz();
  const question = questions.at(index);
  const numQuestion = questions.length;

  return (
    <div className={styles.question}>
      <div className={styles.questionText}>
        <p>
          Question <strong>{index + 1}</strong> of {numQuestion}
        </p>
        <h4>{question.question}</h4>
        <Progress numQuestion={numQuestion} index={index} />
      </div>

      <Option question={question} />
    </div>
  );
}

export default Question;

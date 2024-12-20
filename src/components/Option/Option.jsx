import { useEffect, useState } from "react";
import { useQuiz } from "../../contexts/QuizContext";
import SubmitButton from "../SubmitButton/SubmitButton";
import styles from "./Option.module.css";
import NextButton from "../NextButton/NextButton";
import Correct from "../../assets/images/icon-correct.svg";
import Wrong from "../../assets/images/icon-incorrect.svg";

function Option({ question, isSubmitted, setIsSubmitted, numQuestion }) {
  const { dispatch, answer } = useQuiz();
  const hasAnswer = answer !== null;
  const [displayError, setDisplayError] = useState(false);
  // const selectedAnswer = question.options[answer];
  // const correctAnswer = selectedAnswer === question.answer;
  const correctIndex = question.options.findIndex(
    (option) => option === question.answer
  );

  function handleSubmit() {
    if (!hasAnswer) {
      setDisplayError(true);
    } else {
      setIsSubmitted(true);
      setDisplayError(false);
    }
  }

  useEffect(
    function () {
      setIsSubmitted(false);
      setDisplayError(false);
    },
    [question]
  );

  return (
    <div className={styles.option}>
      {question.options.map((option, index) => {
        const isSelected = answer === index;
        const isCorrect = isSubmitted && index === correctIndex;
        const isWrong = isSubmitted && isSelected && index !== correctIndex;

        return (
          <button
            className={`${styles.optionButton} ${
              isSelected ? styles.answer : ""
            } ${isCorrect ? styles.correct : ""} ${
              isWrong ? styles.wrong : ""
            }`}
            value={option}
            onClick={() =>
              !isSubmitted && dispatch({ type: "newAnswer", payload: index })
            }
            disabled={isSubmitted}
            key={option}
          >
            <span className={styles.optionIdentifier}>
              {String.fromCharCode(97 + index)}
            </span>
            {option}
            {isCorrect && (
              <img src={Correct} alt="CorrectIcon" className={styles.icon} />
            )}
            {isWrong && (
              <img src={Wrong} alt="WrongIcon" className={styles.icon} />
            )}
          </button>
        );
      })}

      {!isSubmitted ? (
        <SubmitButton onSubmit={handleSubmit} />
      ) : (
        <NextButton numQuestion={numQuestion} />
      )}

      {displayError && (
        <div className={styles.error}>
          <img src={Wrong} alt="WrongIcon" className={styles.icon} />
          <span>Please select an answer</span>
        </div>
      )}
    </div>
  );
}

export default Option;

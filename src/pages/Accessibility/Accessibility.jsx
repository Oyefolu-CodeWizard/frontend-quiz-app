import { useQuiz } from "../../contexts/QuizContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Accessibility.module.css";
import Header from "../../components/Header/Header";
import iconAccessibility from "../../assets/images/icon-accessibility.svg";
import FinishScreen from "../../components/FinishScreen/FinishScreen";
import Question from "../../components/Question/Question";

function Accessibility() {
  const { questions, status, answer } = useQuiz();
  const navigate = useNavigate();

  if (!questions || questions.length === 0) {
    useEffect(
      function () {
        navigate("/");
      },
      [navigate]
    );
    return null;
  }

  const AccessibilityQuestions = questions.at(3);

  return (
    <div>
      <Header>
        <div className={styles.title}>
          <img src={iconAccessibility} alt="iconAccessibility" />
          <h2>{AccessibilityQuestions.title}</h2>
        </div>
      </Header>

      {status === "finished" ? (
        <FinishScreen
          icon={iconAccessibility}
          title={AccessibilityQuestions.title}
          questions={AccessibilityQuestions.questions}
          answers={answer}
          backgroundColor={"hsl(278, 100%, 95%)"}
        />
      ) : (
        <Question questions={AccessibilityQuestions.questions} />
      )}
    </div>
  );
}

export default Accessibility;

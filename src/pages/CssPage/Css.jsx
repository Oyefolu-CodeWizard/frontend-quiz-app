import Header from "../../components/Header/Header";
import { useEffect } from "react";
import { useQuiz } from "../../contexts/QuizContext";
import { useNavigate } from "react-router-dom";
import styles from "./Css.module.css";
import FinishScreen from "../../components/FinishScreen/FinishScreen";
import Question from "../../components/Question/Question";
import iconCSS from "../../assets/images/icon-css.svg";

function Css() {
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

  const CSSQuestions = questions.at(1);

  return (
    <div>
      <Header>
        <div className={styles.title}>
          <img src={iconCSS} alt="iconCSS" />
          <h2>{CSSQuestions.title}</h2>
        </div>
      </Header>

      {status === "finished" ? (
        <FinishScreen
          icon={iconCSS}
          title={CSSQuestions.title}
          questions={CSSQuestions.questions}
          answers={answer}
          backgroundColor={"hsl(151, 88%, 94%)"}
        />
      ) : (
        <Question questions={CSSQuestions.questions} />
      )}
    </div>
  );
}

export default Css;

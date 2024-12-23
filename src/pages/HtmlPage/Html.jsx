import { useQuiz } from "../../contexts/QuizContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Html.module.css";
import Header from "../../components/Header/Header";
import iconHTML from "../../assets/images/icon-html.svg";
import Question from "../../components/Question/Question";
import FinishScreen from "../../components/FinishScreen/FinishScreen";

function Html() {
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

  const HTMLQuestions = questions.at(0);

  return (
    <div>
      <Header>
        <div className={styles.title}>
          <img src={iconHTML} alt="iconHTML" />
          <h2>{HTMLQuestions.title}</h2>
        </div>
      </Header>

      {status === "finished" ? (
        <FinishScreen
          icon={iconHTML}
          title={HTMLQuestions.title}
          questions={HTMLQuestions.questions}
          answers={answer}
          backgroundColor={"hsl(22, 100%, 96%)"}
        />
      ) : (
        <Question questions={HTMLQuestions.questions} />
      )}
    </div>
  );
}

export default Html;

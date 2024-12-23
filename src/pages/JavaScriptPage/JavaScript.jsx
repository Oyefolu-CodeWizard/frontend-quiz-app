import { useQuiz } from "../../contexts/QuizContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styles from "./JavaScript.module.css";
import iconJS from "../../assets/images/icon-js.svg";
import Header from "../../components/Header/Header";
import FinishScreen from "../../components/FinishScreen/FinishScreen";
import Question from "../../components/Question/Question";

function JavaScript() {
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

  const JSQuestions = questions.at(2);

  return (
    <div>
      <Header>
        <div className={styles.title}>
          <img src={iconJS} alt="iconJavaScript" />
          <h2>{JSQuestions.title}</h2>
        </div>
      </Header>

      {status === "finished" ? (
        <FinishScreen
          icon={iconJS}
          title={JSQuestions.title}
          questions={JSQuestions.questions}
          answers={answer}
          backgroundColor={"hsl(225, 100%, 96%)"}
        />
      ) : (
        <Question questions={JSQuestions.questions} />
      )}
    </div>
  );
}

export default JavaScript;

import { useQuiz } from "../../contexts/QuizContext";
import styles from "./Html.module.css";
import Header from "../../components/Header/Header";
import iconHTML from "../../assets/images/icon-html.svg";
import Question from "../../components/Question/Question";
import FinishScreen from "../../components/FinishScreen/FinishScreen";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Html() {
  const { questions, status } = useQuiz();
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
          <h2>HTML</h2>
        </div>
      </Header>

      {/* <Question questions={HTMLQuestions.questions} /> */}
      {status === "finished" ? (
        <FinishScreen />
      ) : (
        <Question questions={HTMLQuestions.questions} />
      )}
    </div>
  );
}

export default Html;

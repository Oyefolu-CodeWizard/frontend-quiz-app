import { useQuiz } from "../../contexts/QuizContext";
import styles from "./Html.module.css";
import Header from "../../components/Header/Header";
import iconHTML from "../../assets/images/icon-html.svg";
import Question from "../../components/Question/Question";

function Html() {
  const { questions } = useQuiz();
  const HTMLQuestions = questions.at(0);
  console.log(HTMLQuestions);

  return (
    <div>
      <Header>
        <div className={styles.title}>
          <img src={iconHTML} alt="iconHTML" />
          <h2>HTML</h2>
        </div>
      </Header>
      <Question questions={HTMLQuestions.questions} />
    </div>
  );
}

export default Html;

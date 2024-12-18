import Header from "../../components/Header/Header";
import { useQuiz } from "../../contexts/QuizContext";
import styles from "./JavaScript.module.css";
import iconJS from "../../assets/images/icon-js.svg";

function JavaScript() {
  const { questions } = useQuiz();
  const JSQuestions = questions.at(2);
  console.log(JSQuestions);

  return (
    <div>
      <Header>
        <div className={styles.title}>
          <img src={iconJS} alt="iconJavaScript" />
          <h2>JavaScript</h2>
        </div>
      </Header>
      JavaScript
    </div>
  );
}

export default JavaScript;

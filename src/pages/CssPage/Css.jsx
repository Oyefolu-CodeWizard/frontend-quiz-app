import Header from "../../components/Header/Header";
import { useQuiz } from "../../contexts/QuizContext";
import styles from "./Css.module.css";
import iconCSS from "../../assets/images/icon-css.svg";

function Css() {
  const { questions } = useQuiz();
  const CSSQuestions = questions.at(1);
  console.log(CSSQuestions);

  return (
    <div>
      <Header>
        <div className={styles.title}>
          <img src={iconCSS} alt="iconCSS" />
          <h2>CSS</h2>
        </div>
      </Header>
      CSS
    </div>
  );
}

export default Css;

import Header from "../../components/Header/Header";
import { useQuiz } from "../../contexts/QuizContext";
import styles from "./Accessibility.module.css";
import iconAccessibility from "../../assets/images/icon-accessibility.svg";

function Accessibility() {
  const { questions } = useQuiz();
  const AccessibilityQuestions = questions.at(3);
  console.log(AccessibilityQuestions);
  return (
    <div>
      <Header>
        <div className={styles.title}>
          <img src={iconAccessibility} alt="iconAccessibility" />
          <h2>Accessibility</h2>
        </div>
      </Header>
      Accessibility
    </div>
  );
}

export default Accessibility;

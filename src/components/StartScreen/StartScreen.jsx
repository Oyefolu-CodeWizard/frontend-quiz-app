import styles from "./StartScreen.module.css";
import iconHTML from "../../assets/images/icon-html.svg";
import iconCss from "../../assets/images/icon-css.svg";
import iconJS from "../../assets/images/icon-js.svg";
import iconAccessibility from "../../assets/images/icon-accessibility.svg";

function StartScreen() {
  return (
    <div className={styles.startScreen}>
      <button className={styles.html}>
        <img src={iconHTML} alt="IconHTML" />
        <p>HTML</p>
      </button>
      <button className={styles.css}>
        <img src={iconCss} alt="IconCss" />
        <p>CSS</p>
      </button>
      <button className={styles.js}>
        <img src={iconJS} alt="IconHTML" />
        <p>JavaScript</p>
      </button>
      <button className={styles.accessibility}>
        <img src={iconAccessibility} alt="IconAccessibility" />
        <p>Accessibility</p>
      </button>
    </div>
  );
}

export default StartScreen;

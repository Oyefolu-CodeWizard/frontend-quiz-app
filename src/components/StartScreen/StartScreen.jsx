import styles from "./StartScreen.module.css";
import iconHTML from "../../assets/images/icon-html.svg";
import iconCss from "../../assets/images/icon-css.svg";
import iconJS from "../../assets/images/icon-js.svg";
import iconAccessibility from "../../assets/images/icon-accessibility.svg";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function StartScreen() {
  return (
    <div className={styles.startScreen}>
      <Link to="html">
        <Button type="html">
          <img src={iconHTML} alt="IconHTML" />
          <p>HTML</p>
        </Button>
      </Link>
      <Link to="css">
        <Button type="css">
          <img src={iconCss} alt="IconCss" />
          <p>CSS</p>
        </Button>
      </Link>
      <Link to="javascript">
        <Button type="js">
          <img src={iconJS} alt="IconJavaScript" />
          <p>JavaScript</p>
        </Button>
      </Link>
      <Link to="accessibility">
        <Button type="accessibility">
          <img src={iconAccessibility} alt="IconAccessibility" />
          <p>Accessibility</p>
        </Button>
      </Link>
    </div>
  );
}

export default StartScreen;

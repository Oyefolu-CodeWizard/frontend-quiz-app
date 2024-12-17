import { useState } from "react";
import styles from "./Header.module.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import iconHTML from "../../assets/images/icon-html.svg";
import iconSunLight from "../../assets/images/icon-sun-light.svg";
import iconSunDark from "../../assets/images/icon-sun-dark.svg";
import iconMoonLight from "../../assets/images/icon-moon-light.svg";
import iconMoonDark from "../../assets/images/icon-moon-dark.svg";
function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={styles.header}>
      {/* <div className={styles.title}>
        <img src={iconHTML} alt="iconHTML" />
        <h2>HTML</h2>
      </div> */}

      <div className={styles.themeSwitch}>
        <img
          src={isDarkMode ? iconSunLight : iconSunDark}
          alt={isDarkMode ? "iconSunLight" : "iconSunDark"}
        />
        <ToggleSwitch isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <img
          src={isDarkMode ? iconMoonLight : iconMoonDark}
          alt={isDarkMode ? "iconSunLight" : "iconSunDark"}
        />
      </div>
    </div>
  );
}

export default Header;

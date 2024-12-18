import { useState } from "react";
import styles from "./Header.module.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import iconSunLight from "../../assets/images/icon-sun-light.svg";
import iconSunDark from "../../assets/images/icon-sun-dark.svg";
import iconMoonLight from "../../assets/images/icon-moon-light.svg";
import iconMoonDark from "../../assets/images/icon-moon-dark.svg";
function Header({ children, type }) {
  const [isDarkMode, setIsDarkMode] = useState(function () {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : false;
  });

  return (
    <div
      className={`${styles.header} ${
        children ? styles.justifyBetween : styles.justifyEnd
      }`}
    >
      {/* <div className={styles.title}>
        <img src={iconHTML} alt="iconHTML" />
        <h2>HTML</h2>
      </div> */}
      {children}

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

import { useEffect } from "react";
import styles from "./ToggleSwitch.module.css";

function ToggleSwitch({ isDarkMode, setIsDarkMode }) {
  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
      }
    },
    [isDarkMode]
  );

  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        checked={isDarkMode}
        onChange={() => setIsDarkMode(!isDarkMode)}
      />
      <span className={`${styles.slider} ${styles.round}`}></span>
    </label>
  );
}

export default ToggleSwitch;

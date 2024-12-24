import styles from "./Error.module.css";
import Header from "../Header/Header";

function Error() {
  return (
    <div>
      <Header />
      <div className={styles.error}>
        <span>💥</span> There was an error fetching questions
      </div>
    </div>
  );
}

export default Error;

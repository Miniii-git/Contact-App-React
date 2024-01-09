import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.Header}>
      <FontAwesomeIcon icon={faAddressBook} className={styles.iconContactApp} />
      <h1> Contact App</h1>
      <div id={styles.Mini}>
        <a href="#" target="-blank">
          Made By Mini
        </a>{" "}
        | React.js
      </div>
    </div>
  );
}

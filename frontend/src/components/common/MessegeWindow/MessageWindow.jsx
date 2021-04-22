import GreenButton from "../GreenButton/GreenButton";
import styles from "./MessageWindow.module.css";

const Message = (props) => {
  return (
    <div>
      <div className={styles.fon}></div>
      <div className={styles.messageFon}>
        <div className={styles.messageContainer}>
          <div className={styles.message}>{props.text}</div>
          <div className={styles.closeButton}>
            <GreenButton callback={props.callback} text="OK" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;

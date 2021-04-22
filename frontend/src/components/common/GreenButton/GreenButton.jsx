import styles from "./GreenButton.module.css";

const GreenButton = (props) => {
  return (
    <div
      className={styles.button}
      onClick={() => {
        props.callback(true);
      }}
    >
      {props.text}
    </div>
  );
};

export default GreenButton;

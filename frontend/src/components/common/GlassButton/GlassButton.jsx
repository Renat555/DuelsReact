import styles from "./GlassButton.module.css";

const GlassButton = (props) => {
  return <button className={styles.button}>{props.name}</button>;
};

export default GlassButton;

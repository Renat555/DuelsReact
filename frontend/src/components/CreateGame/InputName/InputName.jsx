import styles from "./InputName.module.css";

const InputName = (props) => {
  function handleChange(event) {
    props.setName(event.currentTarget.value);
  }

  return (
    <input
      className={styles.inputName}
      type="text"
      maxLength="15"
      onChange={handleChange}
    />
  );
};

export default InputName;

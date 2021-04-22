import styles from "./MagicItem.module.css";
import cn from "classnames";

const MagicItem = (props) => {
  let isItemSelected = false;

  if (props.choosenElements.indexOf(props.itemName) !== -1) {
    isItemSelected = true;
  }

  if (props.choosenForms.indexOf(props.itemName) !== -1) {
    isItemSelected = true;
  }

  return (
    <div
      className={cn(styles.container, {
        [styles.selected]: isItemSelected,
      })}
    >
      <div className={styles.title}>{props.itemRussianName}</div>
      <div className={styles.picture + " " + styles[props.itemName]}></div>
    </div>
  );
};

export default MagicItem;

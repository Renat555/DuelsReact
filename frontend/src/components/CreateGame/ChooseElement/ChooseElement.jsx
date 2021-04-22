import MagicItemContainer from "../../common/MagicItem/MagicItemContainer";
import styles from "./ChooseElement.module.css";

const ChooseElement = (props) => {
  let elements = props.elements.map((item) => {
    return (
      <div
        key={item.id}
        onClick={() => {
          if (props.choosenElements.indexOf(item.name) !== -1) {
            props.deleteElement(item.name);
            return;
          }
          if (props.choosenElements.length > 2) return;
          props.addElement(item.name);
        }}
        className={styles[item.name]}
      >
        <MagicItemContainer
          itemRussianName={item.russianName}
          itemName={item.name}
        />
      </div>
    );
  });

  return <div className={styles.elements}>{elements}</div>;
};

export default ChooseElement;

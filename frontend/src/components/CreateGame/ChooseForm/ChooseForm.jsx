import MagicItemContainer from "../../common/MagicItem/MagicItemContainer";
import styles from "./ChooseForm.module.css";

const ChooseForm = (props) => {
  let forms = props.forms.map((item) => {
    return (
      <div
        key={item.id}
        onClick={() => {
          if (props.choosenForms.indexOf(item.name) !== -1) {
            props.deleteForm(item.name);
            return;
          }
          if (props.choosenForms.length > 4) return;
          props.addForm(item.name);
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

  return <div className={styles.forms}>{forms}</div>;
};

export default ChooseForm;

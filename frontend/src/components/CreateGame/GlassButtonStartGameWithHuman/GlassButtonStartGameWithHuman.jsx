import GlassButton from "../../common/GlassButton/GlassButton";
import { useHistory } from "react-router-dom";

const GlassButtonStartGameWithHuman = (props) => {
  const history = useHistory();

  return (
    <div
      onClick={() => {
        if (props.choosenElements.length < 3) {
          props.isElementsEnoughToggle(false);
          return;
        }

        if (props.choosenForms.length < 5) {
          props.isFormsEnoughToggle(false);
          return;
        }

        props.setEnemyType("human");
        history.push("./loading");
      }}
    >
      <GlassButton name="Поиск противника" />
    </div>
  );
};

export default GlassButtonStartGameWithHuman;

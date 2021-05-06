import GlassButton from "../../common/GlassButton/GlassButton";
import { useHistory } from "react-router-dom";

const GlassButtonStartGameWithComp = (props) => {
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

        props.setEnemyType("computer");
        history.push("./loading");
      }}
    >
      <GlassButton name="Игра с компьтером" />
    </div>
  );
};

export default GlassButtonStartGameWithComp;

import GlassButton from "../../common/GlassButton/GlassButton";

const GlassButtonStartGameWithComp = (props) => {
  return (
    <div
      onClick={() => {
        if (props.choosenElements.length < 3) {
          props.isElementsEnoughToggle(false);
        } else if (props.choosenForms.length < 5) {
          props.isFormsEnoughToggle(false);
        }
      }}
    >
      <GlassButton name="Игра с компьтером" />
    </div>
  );
};

export default GlassButtonStartGameWithComp;

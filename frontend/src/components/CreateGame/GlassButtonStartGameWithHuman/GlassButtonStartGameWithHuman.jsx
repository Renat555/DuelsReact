import GlassButton from "../../common/GlassButton/GlassButton";

const GlassButtonStartGameWithHuman = (props) => {
  return (
    <div
      onClick={() => {
        if (props.choosenElements.length < 3) {
          props.isElementsEnoughToggle(false);
          return;
        }
      }}
    >
      <GlassButton name="Поиск противника" />
    </div>
  );
};

export default GlassButtonStartGameWithHuman;

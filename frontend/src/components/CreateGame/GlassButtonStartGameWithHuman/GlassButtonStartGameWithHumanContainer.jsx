import { connect } from "react-redux";
import { isElementsEnoughToggle } from "../../../redux/chooseElementsReducer";
import GlassButtonStartGameWithHuman from "./GlassButtonStartGameWithHuman";

let mapStateToProps = (state) => {
  return {
    choosenElements: state.elements.choosenElements,
  };
};

let GlassButtonStartGameWithHumanContainer = connect(mapStateToProps, {
  isElementsEnoughToggle,
})(GlassButtonStartGameWithHuman);

export default GlassButtonStartGameWithHumanContainer;

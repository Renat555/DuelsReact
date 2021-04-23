import { connect } from "react-redux";
import { isElementsEnoughToggle } from "../../../redux/chooseElementsReducer";
import { isFormsEnoughToggle } from "../../../redux/chooseFormsReducer";
import GlassButtonStartGameWithHuman from "./GlassButtonStartGameWithHuman";

let mapStateToProps = (state) => {
  return {
    choosenElements: state.elements.choosenElements,
    choosenForms: state.forms.choosenForms,
  };
};

let GlassButtonStartGameWithHumanContainer = connect(mapStateToProps, {
  isElementsEnoughToggle,
  isFormsEnoughToggle,
})(GlassButtonStartGameWithHuman);

export default GlassButtonStartGameWithHumanContainer;

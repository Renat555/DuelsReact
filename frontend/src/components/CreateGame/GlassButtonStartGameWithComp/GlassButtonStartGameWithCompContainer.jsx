import { connect } from "react-redux";
import { isElementsEnoughToggle } from "../../../redux/chooseElementsReducer";
import { isFormsEnoughToggle } from "../../../redux/chooseFormsReducer";
import GlassButtonStartGameWithComp from "./GlassButtonStartGameWithComp";

let mapStateToProps = (state) => {
  return {
    choosenElements: state.elements.choosenElements,
    choosenForms: state.forms.choosenForms,
  };
};

let GlassButtonStartGameWithCompContainer = connect(mapStateToProps, {
  isElementsEnoughToggle,
  isFormsEnoughToggle,
})(GlassButtonStartGameWithComp);

export default GlassButtonStartGameWithCompContainer;

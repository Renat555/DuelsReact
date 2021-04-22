import { connect } from "react-redux";
import { isElementsEnoughToggle } from "../../../redux/chooseElementsReducer";
import GlassButtonStartGameWithComp from "./GlassButtonStartGameWithComp";

let mapStateToProps = (state) => {
  return {
    choosenElements: state.elements.choosenElements,
  };
};

let GlassButtonStartGameWithCompContainer = connect(mapStateToProps, {
  isElementsEnoughToggle,
})(GlassButtonStartGameWithComp);

export default GlassButtonStartGameWithCompContainer;

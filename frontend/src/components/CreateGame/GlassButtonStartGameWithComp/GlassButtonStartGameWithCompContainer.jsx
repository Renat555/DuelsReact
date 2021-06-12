import { connect } from "react-redux";
import {
  isElementsEnoughToggle,
  isFormsEnoughToggle,
  setEnemyType,
} from "../../../redux/gameReducer";
import GlassButtonStartGameWithComp from "./GlassButtonStartGameWithComp";

let mapStateToProps = (state) => {
  return {
    choosenElements: state.game.user.elements,
    choosenForms: state.game.user.forms,
  };
};

let GlassButtonStartGameWithCompContainer = connect(mapStateToProps, {
  isElementsEnoughToggle,
  isFormsEnoughToggle,
  setEnemyType,
})(GlassButtonStartGameWithComp);

export default GlassButtonStartGameWithCompContainer;

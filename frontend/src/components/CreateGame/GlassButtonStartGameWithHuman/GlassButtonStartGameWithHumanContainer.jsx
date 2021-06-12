import { connect } from "react-redux";
import {
  isElementsEnoughToggle,
  isFormsEnoughToggle,
  setEnemyType,
} from "../../../redux/gameReducer";
import GlassButtonStartGameWithHuman from "./GlassButtonStartGameWithHuman";

let mapStateToProps = (state) => {
  return {
    choosenElements: state.game.user.elements,
    choosenForms: state.game.user.forms,
  };
};

let GlassButtonStartGameWithHumanContainer = connect(mapStateToProps, {
  isElementsEnoughToggle,
  isFormsEnoughToggle,
  setEnemyType,
})(GlassButtonStartGameWithHuman);

export default GlassButtonStartGameWithHumanContainer;

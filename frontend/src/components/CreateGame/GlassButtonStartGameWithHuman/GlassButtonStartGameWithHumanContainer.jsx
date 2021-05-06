import { connect } from "react-redux";
import {
  isElementsEnoughToggle,
  isFormsEnoughToggle,
  setEnemyType,
} from "../../../redux/createGameReducer";
import GlassButtonStartGameWithHuman from "./GlassButtonStartGameWithHuman";

let mapStateToProps = (state) => {
  return {
    choosenElements: state.createGame.choosenElements,
    choosenForms: state.createGame.choosenForms,
  };
};

let GlassButtonStartGameWithHumanContainer = connect(mapStateToProps, {
  isElementsEnoughToggle,
  isFormsEnoughToggle,
  setEnemyType,
})(GlassButtonStartGameWithHuman);

export default GlassButtonStartGameWithHumanContainer;

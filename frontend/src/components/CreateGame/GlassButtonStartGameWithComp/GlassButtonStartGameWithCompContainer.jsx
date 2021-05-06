import { connect } from "react-redux";
import {
  isElementsEnoughToggle,
  isFormsEnoughToggle,
  setEnemyType,
} from "../../../redux/createGameReducer";
import GlassButtonStartGameWithComp from "./GlassButtonStartGameWithComp";

let mapStateToProps = (state) => {
  return {
    choosenElements: state.createGame.choosenElements,
    choosenForms: state.createGame.choosenForms,
  };
};

let GlassButtonStartGameWithCompContainer = connect(mapStateToProps, {
  isFormsEnoughToggle,
  isElementsEnoughToggle,
  setEnemyType,
})(GlassButtonStartGameWithComp);

export default GlassButtonStartGameWithCompContainer;

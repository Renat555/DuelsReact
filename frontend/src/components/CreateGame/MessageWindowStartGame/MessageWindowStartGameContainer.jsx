import { connect } from "react-redux";
import {
  isElementsEnoughToggle,
  isFormsEnoughToggle,
} from "../../../redux/gameReducer";
import MessageWindowStartGame from "./MessageWindowStartGame";

let mapStateToProps = (state) => {
  return {
    isElementsEnough: state.game.isElementsEnough,
    isFormsEnough: state.game.isFormsEnough,
  };
};

const MessageWindowStartGameContainer = connect(mapStateToProps, {
  isElementsEnoughToggle,
  isFormsEnoughToggle,
})(MessageWindowStartGame);

export default MessageWindowStartGameContainer;

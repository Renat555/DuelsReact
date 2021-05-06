import { connect } from "react-redux";
import {
  isElementsEnoughToggle,
  isFormsEnoughToggle,
} from "../../../redux/createGameReducer";
import MessageWindowStartGame from "./MessageWindowStartGame";

let mapStateToProps = (state) => {
  return {
    isElementsEnough: state.createGame.isElementsEnough,
    isFormsEnough: state.createGame.isFormsEnough,
  };
};

const MessageWindowStartGameContainer = connect(mapStateToProps, {
  isElementsEnoughToggle,
  isFormsEnoughToggle,
})(MessageWindowStartGame);

export default MessageWindowStartGameContainer;

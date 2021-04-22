import { connect } from "react-redux";
import { isElementsEnoughToggle } from "../../../redux/chooseElementsReducer";
import { isFormsEnoughToggle } from "../../../redux/chooseFormsReducer";
import MessageWindowStartGame from "./MessageWindowStartGame";

let mapStateToProps = (state) => {
  return {
    isElementsEnough: state.elements.isElementsEnough,
    isFormsEnough: state.forms.isFormsEnough,
  };
};

const MessageWindowStartGameContainer = connect(mapStateToProps, {
  isElementsEnoughToggle,
  isFormsEnoughToggle,
})(MessageWindowStartGame);

export default MessageWindowStartGameContainer;

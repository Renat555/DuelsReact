import ChooseElement from "./ChooseElement";
import { connect } from "react-redux";
import { addElement, deleteElement } from "../../../redux/createGameReducer";

let mapStateToProps = (state) => {
  return {
    elements: state.createGame.elements,
    choosenElements: state.createGame.choosenElements,
  };
};

const ChooseElementContainer = connect(mapStateToProps, {
  addElement,
  deleteElement,
})(ChooseElement);

export default ChooseElementContainer;

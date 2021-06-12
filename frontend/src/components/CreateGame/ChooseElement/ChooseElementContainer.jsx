import ChooseElement from "./ChooseElement";
import { connect } from "react-redux";
import { addElement, deleteElement } from "../../../redux/gameReducer";

let mapStateToProps = (state) => {
  return {
    elements: state.game.elements,
    choosenElements: state.game.user.elements,
  };
};

const ChooseElementContainer = connect(mapStateToProps, {
  addElement,
  deleteElement,
})(ChooseElement);

export default ChooseElementContainer;

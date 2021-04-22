import ChooseElement from "./ChooseElement";
import { connect } from "react-redux";
import {
  addElement,
  deleteElement,
} from "../../../redux/chooseElementsReducer";

let mapStateToProps = (state) => {
  return {
    elements: state.elements.elements,
    choosenElements: state.elements.choosenElements,
  };
};

const ChooseElementContainer = connect(mapStateToProps, {
  addElement,
  deleteElement,
})(ChooseElement);

export default ChooseElementContainer;

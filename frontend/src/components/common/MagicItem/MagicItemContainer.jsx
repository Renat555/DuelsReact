import { connect } from "react-redux";
import MagicItem from "./MagicItem";

let mapStateToProps = (state) => {
  return {
    choosenElements: state.elements.choosenElements,
    choosenForms: state.forms.choosenForms,
  };
};

const MagicItemContainer = connect(mapStateToProps, {})(MagicItem);

export default MagicItemContainer;

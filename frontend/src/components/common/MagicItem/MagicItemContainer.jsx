import { connect } from "react-redux";
import MagicItem from "./MagicItem";

let mapStateToProps = (state) => {
  return {
    choosenElements: state.createGame.choosenElements,
    choosenForms: state.createGame.choosenForms,
  };
};

const MagicItemContainer = connect(mapStateToProps, {})(MagicItem);

export default MagicItemContainer;

import { connect } from "react-redux";
import MagicItem from "./MagicItem";

let mapStateToProps = (state) => {
  return {
    choosenElements: state.game.user.elements,
    choosenForms: state.game.user.forms,
  };
};

const MagicItemContainer = connect(mapStateToProps, {})(MagicItem);

export default MagicItemContainer;

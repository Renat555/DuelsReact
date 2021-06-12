import ChooseForm from "./ChooseForm";
import { connect } from "react-redux";
import { addForm, deleteForm } from "../../../redux/gameReducer";

let mapStateToProps = (state) => {
  return {
    forms: state.game.forms,
    choosenForms: state.game.user.forms,
  };
};

const ChooseFormContainer = connect(mapStateToProps, { addForm, deleteForm })(
  ChooseForm
);

export default ChooseFormContainer;

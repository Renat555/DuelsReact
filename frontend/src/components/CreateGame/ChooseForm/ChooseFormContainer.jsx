import ChooseForm from "./ChooseForm";
import { connect } from "react-redux";
import { addForm, deleteForm } from "../../../redux/createGameReducer";

let mapStateToProps = (state) => {
  return {
    forms: state.createGame.forms,
    choosenForms: state.createGame.choosenForms,
  };
};

const ChooseFormContainer = connect(mapStateToProps, { addForm, deleteForm })(
  ChooseForm
);

export default ChooseFormContainer;

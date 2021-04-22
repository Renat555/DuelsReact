import ChooseForm from "./ChooseForm";
import { connect } from "react-redux";
import { addForm, deleteForm } from "../../../redux/chooseFormsReducer";

let mapStateToProps = (state) => {
  return {
    forms: state.forms.forms,
    choosenForms: state.forms.choosenForms,
  };
};

const ChooseFormContainer = connect(mapStateToProps, { addForm, deleteForm })(
  ChooseForm
);

export default ChooseFormContainer;

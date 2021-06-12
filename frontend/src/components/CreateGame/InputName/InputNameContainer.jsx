import { connect } from "react-redux";
import { addName } from "../../../redux/gameReducer";
import InputName from "./InputName";

let mapStateToProps = (state) => {
  return {
    name: state.game.user.name,
  };
};

const InputNameContainer = connect(mapStateToProps, { addName })(InputName);

export default InputNameContainer;

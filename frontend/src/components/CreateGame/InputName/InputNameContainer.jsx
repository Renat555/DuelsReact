import { connect } from "react-redux";
import { setName } from "../../../redux/createGameReducer";
import InputName from "./InputName";

let mapStateToProps = (state) => {
  return {
    name: state.createGame.name,
  };
};

const InputNameContainer = connect(mapStateToProps, { setName })(InputName);

export default InputNameContainer;

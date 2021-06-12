import { connect } from "react-redux";
import GameLoading from "./GameLoading";

let mapStateToProps = (state) => {
  return {
    user: state.game.user,
  };
};

const GameLoadingContainer = connect(mapStateToProps, null)(GameLoading);

export default GameLoadingContainer;

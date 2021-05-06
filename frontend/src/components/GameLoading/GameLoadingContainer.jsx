import { connect } from "react-redux";
import GameLoading from "./GameLoading";

let mapStateToProps = (state) => {
  return {
    choosenElements: state.createGame.choosenElements,
    choosenForms: state.createGame.choosenForms,
    enemyType: state.createGame.enemyType,
    name: state.createGame.name,
    user: state.game.user,
  };
};

const GameLoadingContainer = connect(mapStateToProps, null)(GameLoading);

export default GameLoadingContainer;

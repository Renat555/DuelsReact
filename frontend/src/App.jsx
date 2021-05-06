import { Route, Switch } from "react-router";
import CreateGame from "./components/CreateGame/CreateGame";
import Game from "./components/Game/Game";
import GameLoadingContainer from "./components/GameLoading/GameLoadingContainer";
import Help from "./components/Help/Help";
import { addPlayers } from "./redux/gameReducer";
import store from "./redux/reduxStore";

const ws = new WebSocket("ws://a00.kz:3001");

ws.onmessage = (message) => {
  message = JSON.parse(message.data);
  console.log(message);

  if (message.header === "createGame") {
    store.dispatch(addPlayers(message.user, message.enemy));
  } else if (message.header === "processingSpell") {
  } else if (
    message.header === "processingSpell" &&
    message.header === "processingBattlefieldSpell"
  ) {
  } else if (message.header === "changeMuve") {
  } else if (message.header === "processingMuve") {
  }
};

const App = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <CreateGame />
        </Route>
        <Route path="/help">
          <Help />
        </Route>
        <Route path="/loading">
          <GameLoadingContainer ws={ws} />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
      </Switch>
    </div>
  );
};

export default App;

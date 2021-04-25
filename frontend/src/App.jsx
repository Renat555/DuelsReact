import { Route, Switch } from "react-router";
import CreateGame from "./components/CreateGame/CreateGame";
import Game from "./components/Game/Game";
import GameLoading from "./components/GameLoading/GameLoading";
import Help from "./components/Help/Help";

const App = () => {
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
          <GameLoading />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
      </Switch>
    </div>
  );
};

export default App;

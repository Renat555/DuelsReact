import { Route, Switch } from "react-router";
import CreateGame from "./components/CreateGame/CreateGame";
import Game from "./components/Game/Game";
import Help from "./components/Help/Help";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/create">
          <CreateGame />
        </Route>
        <Route path="/help">
          <Help />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
      </Switch>
    </div>
  );
};

export default App;

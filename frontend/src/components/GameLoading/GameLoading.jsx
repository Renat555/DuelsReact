import { useEffect } from "react";
import { useHistory } from "react-router";
import styles from "./GameLoading.module.css";

const GameLoading = (props) => {
  let history = useHistory();

  let gameInformation = {
    header: "createGame",
  };

  gameInformation.user = props.user;

  useEffect(() => {
    props.ws.send(JSON.stringify(gameInformation));
  });

  /*useEffect(() => {
    function goToGame() {
      history.push("/game");
    }

    if (props.user) goToGame();
  }, [props.user, history]);*/

  return (
    <div className={styles.fon}>
      <div className={styles.container}>
        <div className={styles.title}>Загрузка игры</div>
        <div className={styles.loader}></div>
      </div>
    </div>
  );
};

export default GameLoading;

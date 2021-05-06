import { useEffect } from "react";
import { useHistory } from "react-router";
import styles from "./GameLoading.module.css";

const GameLoading = (props) => {
  let history = useHistory();

  function randomString() {
    let string =
      "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789";
    let result = "";

    for (let i = 0; i < 10; i++) {
      result += string[Math.floor(Math.random() * Math.floor(62))];
    }

    return result;
  }

  let gameInformation = {
    header: "createGame",
    user: {
      actionPoints: 5,
      energyPoints: 5,
      position: {
        user: [],
        enemy: [],
      },
      battlefield: [],
      maxHealth: "200",
      health: "200",
      muve: "",
      elements: [],
      forms: [],
      buffs: [],
      debuffs: [],
    },
  };

  gameInformation.user.elements = props.choosenElements;
  gameInformation.user.forms = props.choosenForms;
  gameInformation.user.idGame = randomString();
  gameInformation.user.enemyType = props.enemyType;
  gameInformation.user.name = props.name;

  useEffect(() => {
    props.ws.send(JSON.stringify(gameInformation));
  });

  useEffect(() => {
    function goToGame() {
      history.push("/game");
    }

    if (props.user) goToGame();
  }, [props.user, history]);

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

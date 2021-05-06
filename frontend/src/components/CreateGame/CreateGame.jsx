import ChooseElementContainer from "./ChooseElement/ChooseElementContainer";
import ChooseFormContainer from "./ChooseForm/ChooseFormContainer";
import styles from "./CreateGame.module.css";
import GlassButtonStartGameWithCompContainer from "./GlassButtonStartGameWithComp/GlassButtonStartGameWithCompContainer";
import GlassButtonStartGameWithHumanContainer from "./GlassButtonStartGameWithHuman/GlassButtonStartGameWithHumanContainer";
import MessageWindowStartGameContainer from "./MessageWindowStartGame/MessageWindowStartGameContainer";
import { useHistory } from "react-router-dom";
import InputNameContainer from "./InputName/InputNameContainer";

const CreateGame = (props) => {
  const history = useHistory();

  function goToHelp() {
    history.push("/help");
  }

  return (
    <div className={styles.fon}>
      <MessageWindowStartGameContainer />
      <div className={styles.header}>
        <div className={styles.referenceContainer}>
          <div className={styles.buttonToHelp} onClick={goToHelp}>
            Описание заклинаний
          </div>
        </div>
        <div className={styles.mainTitle}>
          <h1 className={styles.title}>Создание героя</h1>
        </div>
      </div>
      <h2 className={styles.title}>Представтесь</h2>
      <InputNameContainer />
      <h1 className={styles.title}>Выберите три стихии</h1>
      <ChooseElementContainer />
      <h1 className={styles.title}>Выберите пять форм</h1>
      <ChooseFormContainer />
      <div className={styles.buttons}>
        <GlassButtonStartGameWithCompContainer />
        <GlassButtonStartGameWithHumanContainer />
      </div>
    </div>
  );
};

export default CreateGame;

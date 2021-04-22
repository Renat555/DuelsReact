import MessageWindow from "../../common/MessegeWindow/MessageWindow";

const MessageWindowStartGame = (props) => {
  if (props.isElementsEnough && props.isFormsEnough) return null;

  let textWarning, callback;
  if (!props.isElementsEnough) {
    textWarning = "Выберите три стихии!";
    callback = props.isElementsEnoughToggle;
  } else if (!props.isFormsEnough) {
    textWarning = "Выберите пять форм!";
    callback = props.isFormsEnoughToggle;
  }

  return (
    <div>
      <MessageWindow text={textWarning} callback={callback} />
    </div>
  );
};

export default MessageWindowStartGame;

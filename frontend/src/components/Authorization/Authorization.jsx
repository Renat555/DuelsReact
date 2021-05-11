import styles from "./Authorization.module.css";
import { Form, Field } from "react-final-form";

function sendData(params) {
  return null;
}

const Authorization = (props) => {
  return (
    <div className={styles.fon}>
      <div className={styles.container}>
        <Form
          className={styles.form}
          onSubmit={sendData}
          render={() => (
            <form>
              <div>
                <label>Имя</label>
                <Field
                  name="username"
                  component="input"
                  type="text"
                  placeholder="Имя"
                ></Field>
                ;
              </div>
              ;
            </form>
          )}
        />
      </div>
    </div>
  );
};

export default Authorization;

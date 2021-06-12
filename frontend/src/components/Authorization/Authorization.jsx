import styles from "./Authorization.module.css";
import { Form, Field } from "react-final-form";
import { Link } from "react-router-dom";

function sendData(params) {
  return null;
}

const Authorization = (props) => {
  return (
    <div className={styles.fon}>
      <div className={styles.container}>
        <Form
          onSubmit={sendData}
          render={() => (
            <form className={styles.authForm}>
              <div className={styles.inset}>
                <h1>Авторизация</h1>
                <p>
                  <label className={styles.label}>ИМЯ</label>
                  <Field
                    className={styles.input}
                    name="username"
                    component="input"
                    type="text"
                    placeholder="Имя"
                  ></Field>
                </p>
                <p>
                  <label className={styles.label}>ПАРОЛЬ</label>
                  <Field
                    className={styles.input}
                    name="password"
                    component="input"
                    type="password"
                  ></Field>
                </p>
              </div>
              <p className={styles.pContainer}>
                <Link to={"/reg"}>
                  <span>Регистрация</span>
                </Link>
                <button type="button" className={styles.button}>
                  Войти
                </button>
              </p>
            </form>
          )}
        />
      </div>
    </div>
  );
};

export default Authorization;

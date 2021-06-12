import styles from "./Registration.module.css";
import { Form, Field } from "react-final-form";
import { Link } from "react-router-dom";

const Registration = (props) => {
  return (
    <div className={styles.fon}>
      <div className={styles.container}>
        <Form
          onSubmit={props.registrationThunk}
          validate={(values) => {
            let errors = {};
            if (!values.username) {
              errors.username = "Введите имя";
            } else if (!values.password) {
              errors.password = "Придумайте пароль";
            } else if (!values.confirm) {
              errors.confirm = "Повторите пароль";
            } else if (values.password !== values.confirm) {
              errors.confirm = "Пароли не совпадают";
            }

            return errors;
          }}
          render={(props) => {
            return (
              <form className={styles.regForm} onSubmit={props.handleSubmit}>
                <div className={styles.inset}>
                  <h1 className={styles.header}>Регистрация</h1>
                  <Field className={styles.input} name="username">
                    {({ input, meta }) => {
                      return (
                        <p>
                          <label className={styles.label}>ИМЯ</label>
                          <input
                            {...input}
                            type="text"
                            className={styles.input}
                          />
                          {meta.error && meta.touched && (
                            <span className={styles.span}>{meta.error}</span>
                          )}
                        </p>
                      );
                    }}
                  </Field>
                  <Field className={styles.input} name="password">
                    {({ input, meta }) => {
                      return (
                        <p>
                          <label className={styles.label}>ПАРОЛЬ</label>
                          <input
                            {...input}
                            type="password"
                            className={styles.input}
                          />
                          {meta.error && meta.touched && (
                            <span className={styles.span}>{meta.error}</span>
                          )}
                        </p>
                      );
                    }}
                  </Field>
                  <Field className={styles.input} name="confirm">
                    {({ input, meta }) => {
                      return (
                        <p>
                          <label className={styles.label}>
                            ПОВТОРИТЕ ПАРОЛЬ
                          </label>
                          <input
                            {...input}
                            type="password"
                            className={styles.input}
                          />
                          {meta.error && meta.touched && (
                            <span className={styles.span}>{meta.error}</span>
                          )}
                        </p>
                      );
                    }}
                  </Field>
                </div>
                <p className={styles.pContainer}>
                  <Link to={"/auth"}>
                    <span>Войти</span>
                  </Link>
                  <button type="submit" className={styles.button}>
                    Зарегистрироваться
                  </button>
                </p>
              </form>
            );
          }}
        />
      </div>
    </div>
  );
};

export default Registration;

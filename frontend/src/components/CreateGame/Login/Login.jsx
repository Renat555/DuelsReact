import { Link } from "react-router-dom";
import styles from "./Login.module.css";

const Login = (props) => {
  return (
    <Link to={"/auth"} className={styles.loginContainer}>
      Регистрация
    </Link>
  );
};

export default Login;

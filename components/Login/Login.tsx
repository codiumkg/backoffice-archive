"use client";

import Button from "../shared/Button/Button";
import CustomInput from "../shared/CustomInput/CustomInput";
import Typography from "../shared/Typography/Typography";
import styles from "./Login.module.scss";

export default function Login() {
  return (
    <div>
      <div className={styles.heading}>
        <Typography variant="h2">
          Вход в <span className={styles.highlight}>Codium Office</span>
        </Typography>
      </div>
      <div className={styles.card}>
        <form>
          <CustomInput
            name="username"
            label="Логин"
            placeholder="Введите логин..."
          />
          <CustomInput
            name="password"
            label="Пароль"
            placeholder="Введите пароль..."
            type="password"
          />

          <Button text="Войти" />
        </form>
      </div>
    </div>
  );
}

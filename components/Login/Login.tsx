"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useNotification } from "@/hooks/useNotification";
import Button from "../shared/Button/Button";
import CustomInput from "../shared/CustomInput/CustomInput";
import Typography from "../shared/Typography/Typography";
import styles from "./Login.module.scss";
import { ILogin } from "@/interfaces/auth";

const initialValues = {
  username: "",
  password: "",
};

interface LoginForm {
  username: string;
  password: string;
}

export default function Login() {
  const loginForm = useForm<LoginForm>({
    defaultValues: initialValues,
    mode: "onChange",
  });

  const { showErrorNotification } = useNotification();

  const onSubmit: SubmitHandler<LoginForm> = (data: ILogin) => {
    showErrorNotification("Неверный логин или пароль");
  };

  return (
    <div>
      <div className={styles.heading}>
        <Typography variant="h2">
          Вход в <span className={styles.highlight}>Codium Office</span>
        </Typography>
      </div>
      <div className={styles.card}>
        <form onSubmit={loginForm.handleSubmit(onSubmit)}>
          <CustomInput
            label="Логин"
            placeholder="Введите логин..."
            {...loginForm.register("username")}
            onChange={(e) => loginForm.setValue("username", e.target.value)}
          />
          <CustomInput
            label="Пароль"
            placeholder="Введите пароль..."
            type="password"
            {...loginForm.register("password")}
            onChange={(e) => loginForm.setValue("password", e.target.value)}
          />

          <Button text="Войти" type="submit" />
        </form>
      </div>
    </div>
  );
}

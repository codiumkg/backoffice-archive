"use client";

import * as Yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { isEmpty } from "lodash-es";

import Button from "../shared/Button/Button";
import CustomInput from "../shared/CustomInput/CustomInput";
import Typography from "../shared/Typography/Typography";
import { useNotification } from "@/hooks/useNotification";
import { ILogin } from "@/interfaces/auth";
import login from "@/requests/auth/login";

import styles from "./Login.module.scss";

export const loginValidationSchema = Yup.object({
  username: Yup.string()
    .min(3, "Логин должен быть не менее 3 символов")
    .max(32, "Логин должен быть не более 32 символов")
    .required("Это поле обязательное"),
  password: Yup.string()
    .min(6, "Пароль должен быть не менее 6 символов")
    .required("Это поле обязательное"),
});

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
    resolver: yupResolver(loginValidationSchema),
    mode: "onChange",
  });

  const { showErrorNotification, showSuccessNotification } = useNotification();

  const onSubmit: SubmitHandler<LoginForm> = (data: ILogin) => {
    login(data)
      .then((res) => {
        localStorage.setItem("token", res.token);

        showSuccessNotification();
      })
      .catch(() => showErrorNotification("Неверный логин или пароль"));
  };

  const isValid = isEmpty(loginForm.formState.errors);

  console.log(loginForm.formState.errors);

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
            errorMessage={loginForm.formState.errors.username?.message}
            {...loginForm.register("username")}
          />
          <CustomInput
            label="Пароль"
            placeholder="Введите пароль..."
            type="password"
            errorMessage={loginForm.formState.errors.password?.message}
            {...loginForm.register("password")}
          />

          <Button
            text="Войти"
            type="submit"
            disabled={!isValid || !loginForm.formState.isDirty}
          />
        </form>
      </div>
    </div>
  );
}

"use client";

import * as Yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../shared/Button/Button";
import CustomInput from "../shared/CustomInput/CustomInput";
import Typography from "../shared/Typography/Typography";
import { useNotification } from "@/hooks/useNotification";
import { ILogin, Role } from "@/interfaces/auth";
import loginRequest from "@/requests/auth/login";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants/routes";
import useAuth from "@/hooks/useAuth";

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
  const { checkIsLoggedIn, setTokenToStorage } = useAuth();

  const [isLoading, setIsLoading] = useState(false);

  const { showErrorNotification, showSuccessNotification } = useNotification();

  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = checkIsLoggedIn();

    if (isAuthenticated) {
      router.replace(ROUTES.HOME);
    }
  }, [router, checkIsLoggedIn]);

  const loginForm = useForm<LoginForm>({
    defaultValues: initialValues,
    resolver: yupResolver(loginValidationSchema),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<LoginForm> = (data: ILogin) => {
    setIsLoading(true);
    loginRequest(data)
      .then((res) => {
        if (res.user.role === Role.STUDENT) {
          showErrorNotification("Нет доступа к данному ресурсу");

          return;
        }

        setTokenToStorage(res.token);

        router.replace(ROUTES.HOME);
        showSuccessNotification();
      })
      .catch((error) => {
        showErrorNotification("Неверный логин или пароль");
      })
      .finally(() => setIsLoading(false));
  };

  const { isDirty, isValid } = loginForm.formState;

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
            isLoading={isLoading}
            disabled={!isValid || !isDirty || isLoading}
          />
        </form>
      </div>
    </div>
  );
}

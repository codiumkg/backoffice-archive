"use client";

import { IoLogOutOutline } from "react-icons/io5";

import Typography from "../Typography/Typography";

import styles from "./Header.module.scss";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants/routes";
import { useUserData } from "@/queries/userdata";

export default function Header() {
  const router = useRouter();

  const { removeTokenFromStorage } = useAuth();

  const { data: userData, isFetching } = useUserData();

  const handleLogout = () => {
    removeTokenFromStorage();
    router.replace(ROUTES.LOGIN);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className="flex center">
          <div className={styles.user}>
            <Typography variant="body2" weight="600">
              {!isFetching ? userData?.username : "Пользователь"}
            </Typography>
          </div>
          <div className={styles.logo}>
            <Typography variant="h2" color="var(--text-color)">
              Codium Office
            </Typography>
          </div>
        </div>

        <div className={styles["logout-button"]} onClick={handleLogout}>
          <Typography variant="body3">
            <IoLogOutOutline className={styles.logout} />
          </Typography>
          <Typography variant="body2">Выйти</Typography>
        </div>
      </div>
    </div>
  );
}

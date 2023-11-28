"use client";

import { IoLogOutOutline } from "react-icons/io5";

import Typography from "../Typography/Typography";

import styles from "./Header.module.scss";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants/routes";

export default function Header() {
  const router = useRouter();

  const { removeTokenFromStorage } = useAuth();

  const handleLogout = () => {
    removeTokenFromStorage();
    router.replace(ROUTES.LOGIN);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div>
          <Typography variant="h2" color="var(--text-color)">
            Codium Office
          </Typography>
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

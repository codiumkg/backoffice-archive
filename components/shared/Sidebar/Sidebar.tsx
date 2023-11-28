import { MENU_ITEMS } from "@/constants/menu";
import NavElement from "../NavElement/NavElement";
import Typography from "../Typography/Typography";
import styles from "./Sidebar.module.scss";

export default function Sidebar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Typography weight="600">Администрация</Typography>
        </div>

        <div className={styles.content}>
          {MENU_ITEMS.map((menu) => (
            <NavElement key={menu.id} title={menu.title} href={menu.href} />
          ))}
        </div>
      </div>
    </div>
  );
}

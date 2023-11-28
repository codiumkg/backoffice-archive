import Typography from "../Typography/Typography";
import { CiCirclePlus } from "react-icons/ci";
import styles from "./NavElement.module.scss";

interface Props {
  title: string;
  href: string;
}

export default function NavElement({ title, href }: Props) {
  return (
    <div className={styles.container}>
      <Typography>{title}</Typography>
      <CiCirclePlus className={styles.addIcon} />
    </div>
  );
}

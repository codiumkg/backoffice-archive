import Typography from "../Typography/Typography";
import { CiCirclePlus } from "react-icons/ci";
import styles from "./NavElement.module.scss";
import Link from "next/link";

interface Props {
  title: string;
  href: string;
}

export default function NavElement({ title, href }: Props) {
  return (
    <Link href={`/office${href}`}>
      <div className={styles.container}>
        <Typography>{title}</Typography>
        <CiCirclePlus className={styles.addIcon} />
      </div>
    </Link>
  );
}

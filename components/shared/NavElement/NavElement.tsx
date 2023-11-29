import Typography from "../Typography/Typography";
import { CiCirclePlus } from "react-icons/ci";
import cn from "classnames";
import styles from "./NavElement.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  title: string;
  href: string;
}

export default function NavElement({ title, href }: Props) {
  const pathname = usePathname();

  return (
    <Link href={`/office${href}`}>
      <div
        className={cn(
          styles.container,
          pathname === `/office${href}` ? styles.active : ""
        )}
      >
        <Typography>{title}</Typography>
        <CiCirclePlus className={styles.addIcon} />
      </div>
    </Link>
  );
}

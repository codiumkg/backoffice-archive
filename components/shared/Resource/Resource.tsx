"use client";

import styles from "./Resource.module.scss";
import Typography from "../Typography/Typography";

interface Props {
  title: string;
}

export default function Resource({ title }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Typography>{title}</Typography>
      </div>
    </div>
  );
}

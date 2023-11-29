"use client";

import { ReactNode } from "react";

import { IoMdListBox } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";

import Typography from "../shared/Typography/Typography";
import Button from "../shared/Button/Button";

import styles from "./ResourceList.module.scss";

interface Props {
  title: string;
  children?: ReactNode;
}

export default function ResourceList({ title, children }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className="flex center">
          <IoMdListBox className={styles.icon} />
          <Typography>{title}</Typography>
        </div>

        <div className={styles.buttons}>
          <Button text="Добавить" height="36px" icon={<CiCirclePlus />} />
        </div>
      </div>

      <div className={styles.content}>{children}</div>
    </div>
  );
}

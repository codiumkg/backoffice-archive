import { ITableHeader, ITableRow } from "@/interfaces/table";
import { ReactNode } from "react";
import cn from "classnames";

import styles from "./Table.module.scss";

interface Props {
  headers: ITableHeader[];
  children: ReactNode;
}

export default function Table({ headers, children }: Props) {
  return (
    <div className={cn(styles.wrapper, "flex-col")}>
      <div className={cn(styles.header, "flex")}>
        {headers.map(({ title }) => (
          <div key={title} className={styles.column}>
            {title}
          </div>
        ))}
      </div>

      <div>{children}</div>
    </div>
  );
}

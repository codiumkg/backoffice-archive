import Content from "@/components/shared/Content/Content";
import Header from "@/components/shared/Header/Header";
import Sidebar from "@/components/shared/Sidebar/Sidebar";
import { ReactNode } from "react";

import styles from "./layout.module.scss";

interface Props {
  children: ReactNode;
}

export default function OfficeLayout({ children }: Props) {
  return (
    <div className="flex-col">
      <Header />
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}

import Header from "@/components/shared/Header/Header";
import Sidebar from "@/components/shared/Sidebar/Sidebar";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function OfficeLayout({ children }: Props) {
  return (
    <>
      <Header />
      <Sidebar />
      {children}
    </>
  );
}

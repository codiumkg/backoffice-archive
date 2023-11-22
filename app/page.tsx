"use client";

import Typography from "@/components/shared/Typography/Typography";
import { ROUTES } from "@/constants/routes";
import useAuth from "@/hooks/useAuth";
import { Role } from "@/interfaces/auth";
import { useUserData } from "@/queries/auth";
import { redirect } from "next/navigation";
import { useLayoutEffect } from "react";

export default function Home() {
  const { isLoggedIn } = useAuth();

  const { data: userData, isFetching } = useUserData();

  useLayoutEffect(() => {
    if (!isLoggedIn()) {
      redirect(ROUTES.LOGIN);
    }

    if (!isFetching && userData?.role !== Role.ADMIN) {
      redirect("404");
    }
  }, [isLoggedIn, userData, isFetching]);

  return (
    <main className="flex-col center">
      <Typography variant="h1" weight="600">
        Добро пожаловать в офис!
      </Typography>
    </main>
  );
}

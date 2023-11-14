"use client";

import Typography from "@/components/shared/Typography/Typography";
import { useNotification } from "@/hooks/useNotification";
import checkStatus from "@/requests/auth/checkStatus";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const token = localStorage.getItem("token");

  if (!token) {
    redirect("/login");
  }

  useEffect(() => {
    checkStatus().catch(() => redirect("/login"));
  }, []);

  return (
    <main className="flex-col center">
      <Typography variant="h1" weight="700">
        В разработке...
      </Typography>
    </main>
  );
}

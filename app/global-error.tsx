"use client";

import Typography from "@/components/shared/Typography/Typography";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main>
      <Typography>Что то пошло не так</Typography>
    </main>
  );
}

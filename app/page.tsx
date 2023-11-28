import { ROUTES } from "@/constants/routes";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const cookieStorage = cookies();

  if (!cookieStorage.get("token")) {
    redirect(ROUTES.LOGIN);
  }

  redirect(ROUTES.OFFICE);
}

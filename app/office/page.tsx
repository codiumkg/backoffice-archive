import Typography from "@/components/shared/Typography/Typography";
import { Role } from "@/interfaces/auth";
import getUserData from "@/requests/auth/getUserData";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { ROUTES } from "@/constants/routes";
import { StorageKeys } from "@/constants/storageKeys";

async function fetchUserData() {
  try {
    const userData = await getUserData();

    return userData;
  } catch (e) {
    console.error(e);
  }
}

export default async function Office() {
  const userData = await fetchUserData();

  if (userData?.role === Role.STUDENT) {
    return redirect("404");
  }

  const cookieStorage = cookies();

  if (!cookieStorage.get(StorageKeys.TOKEN)) {
    redirect(ROUTES.LOGIN);
  }

  return <main className="flex-col center"></main>;
}

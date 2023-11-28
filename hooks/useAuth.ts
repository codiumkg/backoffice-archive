import { StorageKeys } from "@/constants/storageKeys";
import Cookie from "js-cookie";

export default function useAuth() {
  const checkIsLoggedIn = () => {
    const token = getTokenFromStorage();

    return !!token;
  };

  const getTokenFromStorage = () => {
    const token = Cookie.get(StorageKeys.TOKEN);

    return token;
  };

  const setTokenToStorage = (token: string) => {
    Cookie.set(StorageKeys.TOKEN, token, { expires: 30 });
  };

  const removeTokenFromStorage = () => {
    Cookie.remove(StorageKeys.TOKEN);
  };

  return {
    getTokenFromStorage,
    setTokenToStorage,
    removeTokenFromStorage,
    checkIsLoggedIn,
  };
}

export default function useAuth() {
  const getTokenFromStorage = () => {
    return window.localStorage.getItem("token");
  };

  const setTokenToStorage = (token: string) => {
    window.localStorage.setItem("token", token);
  };

  const isLoggedIn = () => {
    const token = getTokenFromStorage();

    return !!token;
  };

  return {
    getTokenFromStorage,
    setTokenToStorage,
    isLoggedIn,
  };
}

import { StorageKeys } from "@/constants/storageKeys";
import Cookie from "js-cookie";

interface Options {
  url: string;
  method?: string;
  body?: any;
}

class ApiError extends Error {
  statusCode;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export default async function request<T>({
  url,
  method = "GET",
  body,
}: Options) {
  let token;
  if (typeof window === "undefined") {
    const { cookies: serverCookies } = await import("next/headers");
    token = serverCookies().get(StorageKeys.TOKEN)?.value;
  } else {
    const { default: clientCookies } = await import("js-cookie");
    token = clientCookies.get(StorageKeys.TOKEN);
  }

  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    method,
    body: JSON.stringify(body),
    mode: "cors",
  });

  if (response.status === 403) {
    throw new ApiError("Нет доступа к ресурсу", 403);
  } else if (response.status === 401) {
    throw new ApiError("Пожалуйста авторизуйтесь", 401);
  }

  const data = await response.json();

  return data as T;
}

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
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
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

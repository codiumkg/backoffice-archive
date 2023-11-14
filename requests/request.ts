interface Options {
  url: string;
  method?: string;
  body?: any;
}

export default async function request({ url, method = "GET", body }: Options) {
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

  if (!response.ok) {
    throw Error();
  }

  const data = await response.json();

  return data;
}

import { API_LOGIN } from "@/constants/apiConstants";
import request from "../request";
import { ILogin } from "@/interfaces/auth";

export default function login(loginData: ILogin) {
  return request({ url: API_LOGIN, method: "POST", body: loginData });
}

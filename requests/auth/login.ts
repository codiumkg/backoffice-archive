import { API_LOGIN } from "@/constants/apiConstants";
import request from "../request";
import { ILogin, ILoginResponse } from "@/interfaces/auth";

export default function loginRequest(
  loginData: ILogin
): Promise<ILoginResponse> {
  return request({
    url: API_LOGIN,
    method: "POST",
    body: loginData,
  });
}

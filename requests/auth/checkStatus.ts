import { API_CHECK_STATUS } from "@/constants/apiConstants";
import request from "../request";
import { IUserData } from "@/interfaces/auth";

export default async function checkStatus(): Promise<IUserData> {
  return request({ url: API_CHECK_STATUS });
}

import { API_USERDATA } from "@/constants/apiConstants";
import request from "../request";
import { IUserData } from "@/interfaces/auth";

export default async function getUserData(): Promise<IUserData> {
  return request({ url: API_USERDATA });
}

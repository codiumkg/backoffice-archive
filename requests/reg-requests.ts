import { API_REG_REQUESTS } from "@/constants/apiConstants";
import request from "./request";
import { IRegRequest } from "@/interfaces/regRequest";

export function getRegRequests(id?: number): Promise<IRegRequest[]> {
  const paramId = id || "";

  return request<IRegRequest[]>({ url: `${API_REG_REQUESTS}${paramId}` });
}

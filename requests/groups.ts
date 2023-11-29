import { API_GROUPS } from "@/constants/apiConstants";
import { IGroup } from "@/interfaces/auth";
import request from "./request";

export function getGroups(): Promise<IGroup[]> {
  return request<IGroup[]>({ url: API_GROUPS });
}

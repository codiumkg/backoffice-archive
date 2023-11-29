import { API_GROUPS } from "@/constants/apiConstants";
import { IGroup } from "@/interfaces/auth";
import request from "./request";

export function getGroups(id?: number): Promise<IGroup | IGroup[]> {
  const paramId = id || "";

  return request<IGroup | IGroup[]>({ url: `${API_GROUPS}${paramId}` });
}

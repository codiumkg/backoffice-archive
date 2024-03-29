import { API_GROUPS } from "@/constants/apiConstants";
import { IGroup } from "@/interfaces/auth";
import request from "./request";
import { IGroupCreate } from "@/interfaces/group";

export function getGroups(): Promise<IGroup[]> {
  return request<IGroup[]>({ url: API_GROUPS });
}

export function createGroup(data: IGroupCreate): Promise<IGroup> {
  return request<IGroup>({
    method: "POST",
    url: API_GROUPS,
    body: data,
  });
}

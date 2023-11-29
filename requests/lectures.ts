import { ILecture } from "@/interfaces/lecture";
import request from "./request";
import { API_LECTURES } from "@/constants/apiConstants";

export function getLectures(id?: number): Promise<ILecture | ILecture[]> {
  const paramId = id || "";

  return request<ILecture | ILecture[]>({ url: `${API_LECTURES}${paramId}` });
}

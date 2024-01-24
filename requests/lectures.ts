import { ILecture } from "@/interfaces/lecture";
import request from "./request";
import { API_LECTURES } from "@/constants/apiConstants";

export function getLectures(id?: number): Promise<ILecture[]> {
  return request<ILecture[]>({ url: API_LECTURES });
}

export function createLecture(data: ILecture) {
  return request<ILecture>({
    method: "POST",
    url: API_LECTURES,
    body: data,
  });
}

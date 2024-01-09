import request from "./request";
import { API_SUBJECTS } from "@/constants/apiConstants";
import { ISubject } from "@/interfaces/subject";

export function getSubjects(search?: string): Promise<ISubject[]> {
  return request<ISubject[]>({
    url: API_SUBJECTS,
    params: {
      title: search,
    },
  });
}

export function createSubject(data: ISubject) {
  return request<ISubject>({
    method: "POST",
    url: API_SUBJECTS,
    body: data,
  });
}

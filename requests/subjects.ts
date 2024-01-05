import request from "./request";
import { API_SUBJECTS } from "@/constants/apiConstants";
import { ISubject } from "@/interfaces/subject";

export function getSubjects(): Promise<ISubject[]> {
  return request<ISubject[]>({ url: API_SUBJECTS });
}

export function createSubject(data: ISubject) {
  return request<ISubject>({
    method: "POST",
    url: API_SUBJECTS,
    body: JSON.stringify(data),
  });
}

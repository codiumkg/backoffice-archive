import request from "./request";
import { API_SUBJECTS } from "@/constants/apiConstants";
import { ISubject } from "@/interfaces/subject";

export function getSubjects(id?: number): Promise<ISubject | ISubject[]> {
  const paramId = id || "";

  return request<ISubject | ISubject[]>({ url: `${API_SUBJECTS}${paramId}` });
}

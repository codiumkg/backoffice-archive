import { ISection } from "@/interfaces/section";
import request from "./request";
import { API_SECTIONS } from "@/constants/apiConstants";

export function getSections(): Promise<ISection[]> {
  return request<ISection[]>({ url: API_SECTIONS });
}

export function createSection(data: ISection) {
  return request<ISection>({
    method: "POST",
    url: API_SECTIONS,
    body: JSON.stringify(data),
  });
}

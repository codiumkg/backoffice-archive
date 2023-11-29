import { ISection } from "@/interfaces/section";
import request from "./request";
import { API_SECTIONS } from "@/constants/apiConstants";

export function getSections(): Promise<ISection[]> {
  return request<ISection[]>({ url: API_SECTIONS });
}

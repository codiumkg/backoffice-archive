import { ISection } from "@/interfaces/section";
import request from "./request";
import { API_SECTIONS } from "@/constants/apiConstants";

export function getSections(id?: number): Promise<ISection | ISection[]> {
  const paramId = id || "";

  return request<ISection | ISection[]>({ url: `${API_SECTIONS}${paramId}` });
}

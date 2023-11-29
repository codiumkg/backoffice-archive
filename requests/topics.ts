import { ITopic } from "@/interfaces/topic";
import request from "./request";
import { API_TOPICS } from "@/constants/apiConstants";

export function getTopics(): Promise<ITopic[]> {
  return request<ITopic[]>({ url: API_TOPICS });
}

import { ITopic } from "@/interfaces/topic";
import request from "./request";
import { API_TOPICS } from "@/constants/apiConstants";

export function getTopics(id?: number): Promise<ITopic | ITopic[]> {
  const paramId = id || "";

  return request<ITopic | ITopic[]>({ url: `${API_TOPICS}${paramId}` });
}

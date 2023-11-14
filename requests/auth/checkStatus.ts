import { API_CHECK_STATUS } from "@/constants/apiConstants";
import request from "../request";

export default function checkStatus() {
  return request({ url: API_CHECK_STATUS });
}

import { apiUrl, proxyUrl } from "@/constants";
import axios from "axios";

export const httpClient = axios.create({
  baseURL: `${proxyUrl}${apiUrl}`,
});

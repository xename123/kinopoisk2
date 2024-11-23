import { getRequestToFilmApi } from "./requestsApi";
import { AxiosResponse } from "axios";

export default async function getFilmsByPage(
  endpoint: string,
  page: number
): Promise<AxiosResponse> {
  const response = await getRequestToFilmApi(`${endpoint}?page=${page}`);
  return response;
}

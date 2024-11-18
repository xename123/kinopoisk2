import { endpoints } from "@/backend/constansts/filmsURL";
import { getRequestToFilmApi } from "./requestsApi";
import { AxiosResponse } from "axios";

export default async function getFilmByPage(
  page: number
): Promise<AxiosResponse> {
  const response = await getRequestToFilmApi(`${endpoints.films}?page=${page}`);
  return response;
}

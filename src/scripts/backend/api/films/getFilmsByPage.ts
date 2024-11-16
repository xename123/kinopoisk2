import { endpoints } from "@/backend/constansts/filmsURL";
import { Film } from "@/types/types";
import { getRequestToFilmApi } from "./requestsApi";

type filmData = {
  items: Film[];
  total: number;
  totalPages: number;
};

export default async function getFilmByPage(page: number): Promise<filmData> {
  const response = await getRequestToFilmApi(`${endpoints.films}?page=${page}`);
  const data = response.data;
  return data;
}

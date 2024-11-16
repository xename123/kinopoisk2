import { endpoints } from "@/backend/constansts/filmsURL";
import { Film, FilmDetailed } from "@/types/types";
import { getRequestToFilmApi } from "./requestsApi";

export default async function getFilmById(id: string): Promise<FilmDetailed> {
  const response = await getRequestToFilmApi(`${endpoints.films}/${id}`);

  const data = await response.data;
  return data;
}

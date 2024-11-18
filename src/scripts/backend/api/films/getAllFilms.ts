import { Film } from "@/types/types";
import getFilmByPage from "./getFilmsByPage";
import { pause } from "@/utils/pause";

export default async function getAllFilms(): Promise<Film[]> {
  let page = 1;
  let maxPages = 1;
  let films: Film[] = [];

  while (page <= maxPages) {
    const response = await getFilmByPage(page);
    if (response.status !== 200) {
      break;
    }
    const data = response.data;
    maxPages = data.totalPages;
    films = [...films, ...data.items];
    await pause(300);
    page += 1;
  }
  return films;
}

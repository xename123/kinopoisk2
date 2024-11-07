import { Film } from "@/types/types";
import getFilmByPage from "./getFilmsByPage";
import { pause } from "@/utils/pause";

export default async function getAllFilms(): Promise<Film[]> {
  let page = 1;
  let maxPages = 1;
  let films: Film[] = [];

  while (page <= maxPages) {
    const data = await getFilmByPage(page);
    maxPages = data.totalPages;
    films = [...films, ...data.items];
    await pause(250);
    page += 1;
  }
  return films;
}

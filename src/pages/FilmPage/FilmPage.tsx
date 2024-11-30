import getFilmById from "@/backend/api/films/getFilmById";
import Container from "@/components/containers/Container";
import useAsyncEffect from "@/hooks/useAsyncEffect";
import { Film, FilmDetailed } from "@/types/types";
import { useState } from "react";
import { useParams } from "react-router-dom";

import Styles from "./Film.module.css";
import star from "@/assets/reshot-icon-star-MHEGVSB4L7.svg";
import ErrorPage from "../ErrorPage/ErrorPage";
import { genresIdEquals } from "@/backend/constansts/genresIdEquals";
import { store } from "store/store";
const FilmPage = () => {
  let { filmId } = useParams<{ filmId: string }>();
  const [filmData, setFilmData] = useState<FilmDetailed | null>(null);
  const [isFound, setIsFound] = useState<boolean>(true);
  useAsyncEffect(async () => {
    if (filmId) {
      const film: FilmDetailed = await getFilmById(filmId);
      if (!film) setIsFound(false);
      setFilmData(film);
    }
  }, []);

  return (
    <div className={Styles["film"]}>
      <Container>
        {filmData && (
          <div className={Styles["film__detailed"]}>
            <div className={Styles["film__image"]}>
              <img src={filmData.posterUrl} alt="image" />
            </div>
            <div className={Styles["film__content"]}>
              <h2 className={Styles["film__title"]}>
                {filmData.nameRu || filmData.nameEn || filmData.nameOriginal}{" "}
                {filmData.year && `(${filmData.year})`}
              </h2>
              <p className={Styles["film__genres"]}>
                Жанры:
                {filmData.genres?.map((genre) => {
                  const genreEn = Object.keys(genresIdEquals).find((item) => {
                    return (
                      genresIdEquals[item].rusName.toLowerCase() ===
                      genre.genre.toLowerCase()
                    );
                  });
                  return <a href={`/${genreEn}`}> {genre.genre}</a>;
                })}
              </p>
              <p className={Styles["film__description"]}>
                {filmData.description ||
                  filmData.shortDescription ||
                  "Почему-то мы ничего не знаем про этот фильм..."}
              </p>
              <p className={Styles["film-card__rate"]}>
                <span>Рейтинг:</span>
                <img src={star} alt="star" />
                {filmData.ratingKinopoisk}
              </p>
              <a className={Styles["film__watch"]} href={filmData.webUrl}>
                Посмотреть на кинопоиске
              </a>
              <button className={Styles["film__feature"]} type="button">
                Добавить в избранное
              </button>
            </div>
          </div>
        )}

        {store.getState().featuredFilms.map((item: Film) => {
          return item.nameOriginal;
        })}
        {isFound || <ErrorPage message="Мы не нашли этот фильм" />}
      </Container>
    </div>
  );
};

export default FilmPage;

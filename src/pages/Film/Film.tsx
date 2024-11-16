import getFilmById from "@/backend/api/films/getFilmById";
import Container from "@/components/containers/Container";
import useAsyncEffect from "@/hooks/useAsyncEffect";
import { FilmDetailed } from "@/types/types";
import { useState } from "react";
import { useParams } from "react-router-dom";

import Styles from "./Film.module.css";
import star from "@/assets/reshot-icon-star-MHEGVSB4L7.svg";
const Film = () => {
  let { filmId } = useParams<{ filmId: string }>();
  const [filmData, setFilmData] = useState<FilmDetailed | null>(null);

  useAsyncEffect(async () => {
    if (filmId) {
      const film: FilmDetailed = await getFilmById(filmId);
      setFilmData(film);
    }
  }, []);

  return (
    <div className={Styles["film"]}>
      <Container>
        {filmData ? (
          <div className={Styles["film__detailed"]}>
            <div className={Styles["film__image"]}>
              <img src={filmData.posterUrl} alt="image" />
            </div>
            <div>
              <h2 className={Styles["film__title"]}>
                {filmData.nameRu || filmData.nameEn || filmData.nameOriginal}{" "}
                {filmData.year && `(${filmData.year})`}
              </h2>
              <p className={Styles["film__genres"]}>
                Жанры: {filmData.genres?.map((item) => item.genre)}
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
            </div>
          </div>
        ) : (
          <p className={Styles["not-found"]}>Такой фильм не найден :(</p>
        )}
      </Container>
    </div>
  );
};

export default Film;

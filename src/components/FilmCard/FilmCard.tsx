import { Film } from "@/types/types";
import { FC } from "react";
import star from "@/assets/reshot-icon-star-MHEGVSB4L7.svg";

import Styles from "./FilmCard.module.css";
import { Link } from "react-router-dom";

interface IFilmCard {
  film: Film;
}

const FilmCard: FC<IFilmCard> = ({ film }) => {
  return (
    <Link to={`/film/${film.kinopoiskId}`} className={Styles["film-card"]}>
      <img className={Styles["film-card__image"]} src={film.posterUrlPreview} />
      <div className={Styles["film-card__content"]}>
        <h3 className={Styles["film-card__title"]}>
          {film.nameRu || film.nameOriginal}
        </h3>
        <p className={Styles["film-card__genres"]}>
          {film.genres && film.genres[0] && film.genres[0].genre}
        </p>
        <p className={Styles["film-card__rate"]}>
          <img src={star} alt="star" />
          {film.ratingKinopoisk}
        </p>
      </div>
    </Link>
  );
};

export default FilmCard;

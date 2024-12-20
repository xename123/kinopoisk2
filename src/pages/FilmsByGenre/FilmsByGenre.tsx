import { endpoints } from "@/backend/constansts/filmsURL";
import { genresIdEquals } from "@/backend/constansts/genresIdEquals";
import FilmList from "@/components/FIlmList/FilmList";
import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";

const FilmsByGenre: FC = () => {
  const genreName = useParams<{ genre: string }>();
  const genreData = genreName.genre && genresIdEquals[genreName.genre];
  useEffect(() => {
    document.documentElement.classList.add(
      genreName.genre ? genreName.genre : ""
    );
    return () => {
      document.documentElement.classList.remove(
        genreName.genre ? genreName.genre : ""
      );
    };
  }, [genreName]);
  return (
    <>
      {genreData ? (
        <FilmList
          title={"Лучшие фильмы в жанре " + genreData.rusName}
          path={endpoints.filmsByGenre + genreData.id + "&"}
        />
      ) : (
        <ErrorPage message="Фильмы в этом жанре отсутствуют" />
      )}
    </>
  );
};

export default FilmsByGenre;

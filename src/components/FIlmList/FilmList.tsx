import Container from "@/components/containers/Container";
import { FC, useState } from "react";

import Styles from "./FilmList.module.css";
import useAsyncEffect from "@/hooks/useAsyncEffect";
import getAllFilms from "@/backend/api/films/getAllFilms";
import { Film } from "@/types/types";
import FilmCard from "../FilmCard/FilmCard";
import { isResponseOk } from "@/backend/api/api-utils";

const FilmList: FC = () => {
  const [films, setFilms] = useState<Film[] | null>(null);
  const [message, setMessage] = useState<string>("Загрузка...");
  useAsyncEffect(async () => {
    const data = await getAllFilms();
    if (data.length !== 0) {
      setFilms(data);
    } else {
      setMessage("Не удалось получить фильмы");
    }
  }, []);

  return (
    <section className={Styles["films"]}>
      <Container>
        <h1 className={Styles["title"]}>Самые Лучшие Фильмы</h1>
        <div className={Styles["films__list"]}>
          {films ? (
            films.map((item, index) => {
              return <FilmCard key={index} film={item} />;
            })
          ) : (
            <p className={Styles["loading"]}>{message}</p>
          )}
        </div>
      </Container>
    </section>
  );
};

export default FilmList;

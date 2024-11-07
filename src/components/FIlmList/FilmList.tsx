import Container from "@/components/containers/Container";
import { FC, useState } from "react";

import Styles from "./FilmList.module.css";
import useAsyncEffect from "@/hooks/useAsyncEffect";
import getAllFilms from "@/backend/api/films/getAllFilms";
import { Film } from "@/types/types";
import FilmCard from "../FilmCard/FilmCard";

const FilmList: FC = () => {
  const [films, setFilms] = useState<Film[] | null>(null);
  useAsyncEffect(async () => {
    const data = await getAllFilms();
    setFilms(data);
  });
  return (
    <section className={Styles["films"]}>
      <Container>
        <h1 className={Styles["title"]}>Самые Лучшие Фильмы</h1>
        <div className={Styles["films__list"]}>
          {films
            ? films.map((item, index) => {
                return <FilmCard key={index} film={item} />;
              })
            : ""}
        </div>
      </Container>
    </section>
  );
};

export default FilmList;

import Container from "@/components/containers/Container";
import { FC, useState } from "react";

import Styles from "./FilmList.module.css";
import useAsyncEffect from "@/hooks/useAsyncEffect";
import { Film } from "@/types/types";
import FilmCard from "../FilmCard/FilmCard";
import getFilmsByPage from "@/backend/api/films/getFilmsByPage";
import Pagination from "../ui/Pagination/Pagination";
import usePage from "@/hooks/usePage";

interface IFilmList {
  title: string;
  path: string;
}

const FilmList: FC<IFilmList> = ({ title, path }) => {
  const totalPages = 5;
  const [lastPage, setLastPage] = useState<number>(0);
  const [message, setMessage] = useState<string>("Загрузка...");

  const [films, setFilms] = useState<Film[] | null>(null);

  const [page, updateUrl, changePage] = usePage();

  useAsyncEffect(async () => {
    setFilms(null);
    const response = await getFilmsByPage(path, page);
    const data = response.data;
    console.log(page);
    updateUrl(page);
    console.log(data, page);
    if (!lastPage) setLastPage(data.totalPages);
    if (data.items.length !== 0) {
      setFilms(data.items);
    } else {
      setMessage("Не удалось получить фильмы");
    }
  }, [page, path]);
  return (
    <section className={Styles["films"]}>
      <Container>
        <h1 className={Styles["title"]}>{title}</h1>
        {films && page <= lastPage ? (
          <>
            {lastPage !== 1 && (
              <Pagination
                currentPage={page}
                lastPage={lastPage}
                maxLength={totalPages}
                setCurrentPage={changePage}
              />
            )}
            <div className={Styles["films__list"]}>
              {films.map((item, index) => {
                return <FilmCard key={index} film={item} />;
              })}
            </div>
            {lastPage !== 1 && (
              <Pagination
                currentPage={page}
                lastPage={lastPage}
                maxLength={totalPages}
                setCurrentPage={changePage}
              />
            )}
          </>
        ) : (
          <p className={Styles["loading"]}>{message}</p>
        )}
      </Container>
    </section>
  );
};

export default FilmList;

import Container from "@/components/containers/Container";
import { FC, useEffect, useState } from "react";

import Styles from "./FilmList.module.css";
import useAsyncEffect from "@/hooks/useAsyncEffect";
import { Film } from "@/types/types";
import FilmCard from "../FilmCard/FilmCard";
import getFilmByPage from "@/backend/api/films/getFilmsByPage";
import Pagination from "../ui/Pagination/Pagination";
import { useSearchParams } from "react-router-dom";
import { searchStringToObject, updateInLocation } from "serialize-query-params";

const FilmList: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [films, setFilms] = useState<Film[] | null>(null);
  const [page, setPage] = useState<number>(1);
  const totalPages = 5;
  const [lastPage, setLastPage] = useState<number>(0);

  const [message, setMessage] = useState<string>("Загрузка...");

  useEffect(() => {
    const params = searchStringToObject(searchParams.toString());
    setPage(Number(params.page) || 1);
  }, []);

  useAsyncEffect(async () => {
    updateUrl(page);
    const response = await getFilmByPage(page);
    const data = response.data;
    if (!lastPage) setLastPage(data.totalPages);
    if (data.items.length !== 0) {
      setFilms(data.items);
    } else {
      setMessage("Не удалось получить фильмы");
    }
  }, [page]);

  function updateUrl(page: number) {
    const updatedSearch = updateInLocation(
      { page: String(page) },
      document.location
    );
    setSearchParams(updatedSearch.search);
  }

  function changePage(newPage: number) {
    setPage(() => newPage);
    setFilms(null);
    setMessage("Загружаю новые фильмы");
  }
  return (
    <section className={Styles["films"]}>
      <Container>
        <h1 className={Styles["title"]}>Самые Лучшие Фильмы</h1>
        {films ? (
          <>
            <div className={Styles["films__list"]}>
              {films.map((item, index) => {
                return <FilmCard key={index} film={item} />;
              })}
            </div>
            <Pagination
              currentPage={page}
              lastPage={lastPage}
              maxLength={totalPages}
              setCurrentPage={changePage}
            />
          </>
        ) : (
          <p className={Styles["loading"]}>{message}</p>
        )}
      </Container>
    </section>
  );
};

export default FilmList;

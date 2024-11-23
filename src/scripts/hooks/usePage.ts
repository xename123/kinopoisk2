import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchStringToObject, updateInLocation } from "serialize-query-params";

export default function usePage(): [
  number,
  (page: number) => void,
  (newPage: number) => void
] {
  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const params = searchStringToObject(searchParams.toString());
    setPage(Number(params.page) || 1);
  }, []);

  function updateUrl(page: number) {
    const updatedSearch = updateInLocation(
      { page: String(page) },
      document.location
    );
    setSearchParams(updatedSearch.search);
  }

  function changePage(newPage: number) {
    setPage(() => newPage);
  }
  return [page, updateUrl, changePage];
}

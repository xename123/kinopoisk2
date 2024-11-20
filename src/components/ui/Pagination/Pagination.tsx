import { getPaginationItems } from "@/utils/pagination.ts";
import PageLink from "./PageLink.tsx";
import Styles from "./Pagination.module.css";

import arrow from "@/assets/pagination-arrow.svg";

export type Props = {
  currentPage: number;
  lastPage: number;
  maxLength: number;
  setCurrentPage: (page: number) => void;
};

export default function Pagination({
  currentPage,
  lastPage,
  maxLength,
  setCurrentPage,
}: Props) {
  const pageNums = getPaginationItems(currentPage, lastPage, maxLength);
  console.log(currentPage);
  return (
    <nav className={Styles["pagination"]} aria-label="Pagination">
      <PageLink
        className="prev-page"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        <img src={arrow} alt="asd" />
      </PageLink>
      {pageNums.map((pageNum: number, idx: number) => (
        <PageLink
          key={idx}
          active={currentPage === pageNum}
          disabled={isNaN(pageNum)}
          onClick={() => {
            console.log(pageNum);
            setCurrentPage(pageNum);
          }}
        >
          {!isNaN(pageNum) ? pageNum : "..."}
        </PageLink>
      ))}
      <PageLink
        className="next-page"
        disabled={currentPage === lastPage}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        <img src={arrow} alt="asd" />
      </PageLink>
    </nav>
  );
}

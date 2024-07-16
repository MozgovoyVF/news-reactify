import { TOTAL_PAGES } from "../../constants/constants";
import { IFilters } from "../../pages/Main/Main";
import { News } from "../../types/news.types";
import NewsFilters from "../NewsFilters/NewsFilters";
import NewsListWithSkeleton from "../NewsList/NewsList";
import Pagination from "../Pagination/Pagination";
import styles from "./styles.module.css";

interface NewsByFilters {
  filters: IFilters;
  changeFilter: (key: string, value: string | number | null) => void;
  isLoading: boolean;
  news?: News[];
}

const NewsByFilters = ({
  filters,
  changeFilter,
  isLoading,
  news,
}: NewsByFilters) => {
  const handleNextPage = () => {
    if (filters.pageNumber < TOTAL_PAGES) {
      changeFilter("pageNumber", filters.pageNumber + 1);
    }
  };

  const handlePreviousPage = () => {
    if (filters.pageNumber > 1) {
      changeFilter("pageNumber", filters.pageNumber - 1);
    }
  };

  const handlePageClick = (pageNumber: number) => {
    changeFilter("pageNumber", pageNumber);
  };

  return (
    <section className={styles.section}>
      <NewsFilters changeFilter={changeFilter} filters={filters} />

      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.pageNumber}
      />

      {news ? <NewsListWithSkeleton isLoading={isLoading} news={news} /> : null}

      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.pageNumber}
      />
    </section>
  );
};

export default NewsByFilters;

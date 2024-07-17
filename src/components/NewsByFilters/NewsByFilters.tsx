import { getNews } from "../../api/api.news";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilters";
import NewsFilters from "../NewsFilters/NewsFilters";
import NewsListWithSkeleton from "../NewsList/NewsList";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper";
import styles from "./styles.module.css";

const NewsByFilters = () => {
  const { changeFilter, filters } = useFilters({
    pageNumber: 1,
    pageSize: PAGE_SIZE,
    category: null,
    keywords: "",
  });

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { data, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

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

  const paginationProps = {
    handleNextPage: handleNextPage,
    handlePreviousPage: handlePreviousPage,
    handlePageClick: handlePageClick,
    totalPages: TOTAL_PAGES,
    currentPage: filters.pageNumber,
  };

  return (
    <section className={styles.section}>
      <NewsFilters changeFilter={changeFilter} filters={filters} />

      <PaginationWrapper top bottom paginationProps={paginationProps}>
        {data?.news ? (
          <NewsListWithSkeleton isLoading={isLoading} news={data?.news} />
        ) : null}
      </PaginationWrapper>
    </section>
  );
};

export default NewsByFilters;

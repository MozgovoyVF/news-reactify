import { TOTAL_PAGES } from "../../constants/constants";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { useAppDispatch, useAppSelector } from "../../store";
import { useGetNewsQuery } from "../../store/services/news.api";
import { setFilters } from "../../store/slices/news.slice";
import NewsFilters from "../NewsFilters/NewsFilters";
import NewsListWithSkeleton from "../NewsList/NewsList";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper";
import styles from "./styles.module.css";

const NewsByFilters = () => {
  const filters = useAppSelector((state) => state.news.filters);
  const news = useAppSelector((state) => state.news.news);
  const dispatch = useAppDispatch();

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });

  const handleNextPage = () => {
    if (filters.pageNumber < TOTAL_PAGES) {
      dispatch(
        setFilters({ key: "pageNumber", value: filters.pageNumber + 1 })
      );
    }
  };

  const handlePreviousPage = () => {
    if (filters.pageNumber > 1) {
      dispatch(
        setFilters({ key: "pageNumber", value: filters.pageNumber - 1 })
      );
    }
  };

  const handlePageClick = (pageNumber: number) => {
    dispatch(setFilters({ key: "pageNumber", value: pageNumber }));
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
      <NewsFilters filters={filters} />

      <PaginationWrapper top bottom {...paginationProps}>
        {news ? (
          <NewsListWithSkeleton isLoading={isLoading} news={news} />
        ) : null}
      </PaginationWrapper>
    </section>
  );
};

export default NewsByFilters;

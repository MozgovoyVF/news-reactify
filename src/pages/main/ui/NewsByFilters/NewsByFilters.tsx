import { useAppSelector, useAppDispatch } from "@/app/appStore";
import NewsFilters from "@/pages/main/ui/NewsFilters/NewsFilters";
import { TOTAL_PAGES } from "@/shared/constants/constants";
import { useDebounce } from "@/shared/hooks/useDebounce";
import styles from "./styles.module.css";
import { useGetNewsQuery } from "@/entities/news/api/news.api";
import { setFilters } from "@/entities/news/model/news.slice";
import NewsListWithSkeleton from "@/widjets/news/ui/NewsList/NewsList";
import { Pagination } from "@/features/pagination";

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

      <Pagination top bottom {...paginationProps}>
        {news ? (
          <NewsListWithSkeleton isLoading={isLoading} news={news} />
        ) : null}
      </Pagination>
    </section>
  );
};

export default NewsByFilters;

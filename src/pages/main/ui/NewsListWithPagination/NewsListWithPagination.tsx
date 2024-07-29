import { TOTAL_PAGES } from "@/shared/constants/constants";
import { Pagination } from "@/features/pagination";
import { NewsList } from "@/widjets/news";
import { IFilters } from "@/shared/types/news.types";
import { News } from "@/entities/news";
import { usePaginationsNews } from "../../utils/hooks/usePaginationNews";

interface INewsListWithPagination {
  filters: IFilters;
  news: News[];
  isLoading: boolean;
}

const NewsListWithPagination = ({
  filters,
  news,
  isLoading,
}: INewsListWithPagination) => {
  const { handleNextPage, handlePageClick, handlePreviousPage } =
    usePaginationsNews(filters);

  const paginationProps = {
    handleNextPage: handleNextPage,
    handlePreviousPage: handlePreviousPage,
    handlePageClick: handlePageClick,
    totalPages: TOTAL_PAGES,
    currentPage: filters.pageNumber,
  };

  return (
    <Pagination top bottom {...paginationProps}>
      {news ? (
        <NewsList
          isLoading={isLoading}
          news={news}
          type="item"
          direction="column"
        />
      ) : null}
    </Pagination>
  );
};

export default NewsListWithPagination;

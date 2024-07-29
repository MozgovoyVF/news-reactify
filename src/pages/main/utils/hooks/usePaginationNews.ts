import { useAppDispatch } from "@/app/appStore";
import { setFilters } from "@/entities/news/model/news.slice";
import { TOTAL_PAGES } from "@/shared/constants/constants";
import { IFilters } from "@/shared/types/news.types";

export const usePaginationsNews = (filters: IFilters) => {
  const dispatch = useAppDispatch();

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

  return { handleNextPage, handlePreviousPage, handlePageClick };
};

import styles from "./styles.module.css";
import { getCategories, getNews } from "../../api/api.news";
import NewsList from "../../components/NewsList/NewsList";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import Pagination from "../../components/Pagination/Pagination";
import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilters";

export interface IFilters {
  pageNumber: number;
  pageSize: number;
  category: string | null;
  keywords: string;
}

const Main = () => {
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

  const { data: dataCategories } = useFetch(getCategories, {
    category: filters.category,
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

  return (
    <main className={styles.main}>
      {dataCategories.categories ? (
        <Categories
          categories={dataCategories.categories}
          selectedCategory={filters.category}
          setSelectedCategory={(category) => changeFilter("category", category)}
        />
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter("keywords", keywords)}
      />

      {data.news ? (
        <NewsBanner isLoading={isLoading} item={data.news[0]} />
      ) : null}

      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.pageNumber}
      />

      {data.news ? <NewsList isLoading={isLoading} news={data.news} /> : null}

      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.pageNumber}
      />
    </main>
  );
};

export default Main;

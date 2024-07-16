import styles from "./styles.module.css";
import { getNews } from "../../api/api.news";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { PAGE_SIZE } from "../../constants/constants";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilters";
import LatestNews from "../../components/LatestNews/LatestNews";
import NewsByFilters from "../../components/NewsByFilters/NewsByFilters";

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

  return (
    <main className={styles.main}>
      {data.news ? (
        <LatestNews isLoading={isLoading} banners={data.news} />
      ) : null}

      <NewsByFilters
        changeFilter={changeFilter}
        filters={filters}
        isLoading={isLoading}
        news={data?.news}
      />
    </main>
  );
};

export default Main;

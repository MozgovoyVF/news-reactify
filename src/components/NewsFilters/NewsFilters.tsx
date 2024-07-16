import { getCategories } from "../../api/api.news";
import { useFetch } from "../../helpers/hooks/useFetch";
import { IFilters } from "../../pages/Main/Main";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import styles from "./styles.module.css";

interface INewsFilter {
  filters: IFilters;
  changeFilter: (key: string, value: string | number | null) => void;
}

const NewsFilters = ({ filters, changeFilter }: INewsFilter) => {
  const { data: dataCategories } = useFetch(getCategories, {
    category: filters.category,
  });

  return (
    <div className={styles.filters}>
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
    </div>
  );
};

export default NewsFilters;

import { useAppDispatch } from "../../store";
import { useGetCategoriesQuery } from "../../store/services/news.api";
import { setFilters } from "../../store/slices/news.slice";
import { IFilters } from "../../types/news.types";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Slider from "../Slider/Slider";
import styles from "./styles.module.css";

interface INewsFilter {
  filters: IFilters;
}

const NewsFilters = ({ filters }: INewsFilter) => {
  const { data } = useGetCategoriesQuery(null);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.filters}>
      {data?.categories ? (
        <Slider>
          <Categories
            categories={data.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) =>
              dispatch(setFilters({ key: "category", value: category }))
            }
          />
        </Slider>
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) =>
          dispatch(setFilters({ key: "keywords", value: keywords }))
        }
      />
    </div>
  );
};

export default NewsFilters;

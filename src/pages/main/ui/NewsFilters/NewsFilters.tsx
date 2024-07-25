import { useAppDispatch } from "@/app/appStore";
import { IFilters } from "@/shared/types/news.types";
import styles from "./styles.module.css";
import { useGetCategoriesQuery } from "@/entities/category/api/categories.api";
import { setFilters } from "@/entities/news/model/news.slice";
import { Slider } from "@/features/slider";
import { Categories } from "@/features/category";
import { Search } from "@/features/search";

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

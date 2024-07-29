import { useAppDispatch } from "@/app/appStore";
import { IFilters } from "@/shared/types/news.types";
import styles from "./styles.module.css";
import { setFilters } from "@/entities/news/model/news.slice";
import { Slider } from "@/features/slider";
import { Categories } from "@/features/category";
import { Search } from "@/features/search";
import { CategoriesType } from "@/entities/category";

interface INewsFilter {
  filters: IFilters;
  categories: CategoriesType[];
}

const NewsFilters = ({ filters, categories }: INewsFilter) => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.filters}>
      {categories ? (
        <Slider>
          <Categories
            categories={categories}
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

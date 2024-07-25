import withSkeleton from "@/shared/hoc/withSkeleton";

import styles from "./styles.module.css";
import { News, NewsItem } from "@/entities/news";

export interface INewsList {
  news?: News[];
}

const NewsList = ({ news }: INewsList) => {
  return (
    <div className={styles.list}>
      {news?.map((item) => (
        <NewsItem item={item} key={item.id} />
      ))}
    </div>
  );
};

const NewsListWithSkeleton = withSkeleton<INewsList>(NewsList, "item", 10);

export default NewsListWithSkeleton;

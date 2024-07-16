import withSkeleton from "../../helpers/hoc/withSkeleton";
import { News } from "../../types/news.types";
import NewsItem from "../NewsItem/NewsItem";
import styles from "./styles.module.css";

export interface INewsList {
  news: News[];
}

const NewsList = ({ news }: INewsList) => {
  return (
    <div className={styles.list}>
      {news.map((item) => (
        <NewsItem item={item} key={item.id} />
      ))}
    </div>
  );
};

const NewsListWithSkeleton = withSkeleton(NewsList, "item", 10, "column");

export default NewsListWithSkeleton;

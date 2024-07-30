import withSkeleton from "@/shared/hoc/withSkeleton";

import styles from "./styles.module.css";
import { News } from "@/entities/news";
import NewsCard from "@/entities/news/ui/NewsCard/NewsCard";
import { ReactNode } from "react";

export interface INewsList {
  news?: News[];
  type?: "banner" | "item";
  direction?: "row" | "column";
  viewNewsSlot?: (news: News) => ReactNode;
}

const NewsList = ({ news, type = "item", viewNewsSlot }: INewsList) => {
  return (
    <div className={`${type === "item" ? styles.items : styles.banners}`}>
      {news?.map((item) => (
        <NewsCard
          type={type}
          item={item}
          key={item.id}
          viewNewsSlot={viewNewsSlot}
        />
      ))}
    </div>
  );
};

const NewsListWithSkeleton = withSkeleton<INewsList>(NewsList, 10);

export default NewsListWithSkeleton;

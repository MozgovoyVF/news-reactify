import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo";

import styles from "./styles.module.css";
import { News } from "../../model/types";
import Image from "@/shared/ui/Image/Image";

interface INewsItem {
  item: News;
}

const NewsDetails = ({ item }: INewsItem) => {
  return (
    <div className={styles.details}>
      <Image image={item.image} />

      <div className={styles.description}>
        <p>
          {item.description} ({item.language}){" "}
          <a target="_blank" href={item.url}>
            Read more...
          </a>
        </p>
        <p className={styles.extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>

        <ul>
          {item.category.map((category) => (
            <button key={category} className={styles.active}>
              {category}
            </button>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NewsDetails;

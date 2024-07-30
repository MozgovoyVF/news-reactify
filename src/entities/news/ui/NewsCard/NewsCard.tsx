import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo";

import styles from "./styles.module.css";
import { News } from "../../model/types";
import Image from "@/shared/ui/Image/Image";
import { ReactNode } from "react";

interface INewsItem {
  item: News;
  type: "banner" | "item";
  viewNewsSlot?: (news: News) => ReactNode;
}

const NewsCard = ({ item, type = "item", viewNewsSlot }: INewsItem) => {
  return (
    <li className={`${styles.card} ${type === "banner" && styles.banner}`}>
      {type === "banner" ? (
        <Image image={item.image} />
      ) : (
        <div
          className={styles.wrapper}
          style={{ backgroundImage: `url(${item.image})` }}
        ></div>
      )}

      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </div>

      {viewNewsSlot ? viewNewsSlot(item) : null}
    </li>
  );
};

export default NewsCard;

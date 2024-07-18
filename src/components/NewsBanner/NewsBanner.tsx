import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import { News } from "../../types/news.types";
import Image from "../Image/Image";
import styles from "./styles.module.css";

export interface INewsBanner {
  item: News;
}

const NewsBanner = ({ item }: INewsBanner) => {
  return (
    <div className={styles.banner}>
      <Image image={item.image} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  );
};

export default NewsBanner;

import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo";

import styles from "./styles.module.css";
import Image from "@/shared/ui/Image/Image";
import { News } from "../../model/types";

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

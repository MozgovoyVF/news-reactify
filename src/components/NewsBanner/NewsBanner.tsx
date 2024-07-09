import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import Image from "../Image/Image";
import styles from "./styles.module.css";

interface INewsBanner {
  item: {
    title: string;
    published: string;
    author: string;
    image?: string;
  };
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

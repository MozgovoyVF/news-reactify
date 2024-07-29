import { useGetLatestNewsQuery } from "@/entities/news/api/news.api";
import styles from "./styles.module.css";
import { NewsList } from "@/widjets/news";

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={styles.section}>
      <NewsList
        direction="row"
        type="banner"
        isLoading={isLoading}
        news={data && data.news}
      />
    </section>
  );
};

export default LatestNews;

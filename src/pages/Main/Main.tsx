import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { News } from "../../types/news.types";
import { getNews } from "../../api/api.news";
import NewsList from "../../components/NewsList/NewsList";
import NewsBanner from "../../components/NewsBanner/NewsBanner";

const Main = () => {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getNews();
        setNews(data.news);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);

  return (
    <main className={styles.main}>
      {news.length > 0 ? <NewsBanner item={news[0]} /> : null}

      <NewsList news={news} />
    </main>
  );
};

export default Main;

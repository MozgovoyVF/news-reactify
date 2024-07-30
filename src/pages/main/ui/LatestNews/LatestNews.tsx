import { useGetLatestNewsQuery } from "@/entities/news/api/news.api";
import styles from "./styles.module.css";
import { NewsList } from "@/widjets/news";
import { News } from "@/entities/news";
import { useAppDispatch } from "@/app/appStore";
import { setCurrentNews } from "@/entities/news/model/news.slice";
import { useNavigate } from "react-router-dom";

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const navigateTo = (news: News) => {
    dispatch(setCurrentNews(news));
    navigate(`/news/${news.id}`);
  };

  return (
    <section className={styles.section}>
      <NewsList
        direction="row"
        type="banner"
        isLoading={isLoading}
        news={data && data.news}
        viewNewsSlot={(news: News) => (
          <p onClick={() => navigateTo(news)}>view more...</p>
        )}
      />
    </section>
  );
};

export default LatestNews;

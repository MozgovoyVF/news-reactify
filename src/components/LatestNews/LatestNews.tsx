import { getLatestNews } from "../../api/api.news";
import { useFetch } from "../../helpers/hooks/useFetch";
import { INewsApiResponse } from "../../types/news.types";
import BannersListWithSkeleton from "../BannersList/BannersList";
import styles from "./styles.module.css";

const LatestNews = () => {
  const { data, isLoading } = useFetch<INewsApiResponse, null>(getLatestNews);

  return (
    <section className={styles.section}>
      <BannersListWithSkeleton
        isLoading={isLoading}
        banners={data && data.news}
      />
    </section>
  );
};

export default LatestNews;

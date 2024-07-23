import { useGetLatestNewsQuery } from "../../store/services/news.api";
import BannersListWithSkeleton from "../BannersList/BannersList";
import styles from "./styles.module.css";

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

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

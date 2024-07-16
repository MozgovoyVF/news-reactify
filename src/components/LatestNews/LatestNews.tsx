import { News } from "../../types/news.types";
import BannersListWithSkeleton from "../BannersList/BannersList";
import styles from "./styles.module.css";

interface ILatestNews {
  banners: News[];
  isLoading: boolean;
}

const LatestNews = ({ banners, isLoading }: ILatestNews) => {
  return (
    <section className={styles.section}>
      <BannersListWithSkeleton isLoading={isLoading} banners={banners} />
    </section>
  );
};

export default LatestNews;

import { getLatestNews } from "../../api/api.news";
import { useFetch } from "../../helpers/hooks/useFetch";
import BannersListWithSkeleton from "../BannersList/BannersList";
import styles from "./styles.module.css";

const LatestNews = () => {
  const { data, isLoading } = useFetch(getLatestNews);

  console.log(data);

  return (
    <section className={styles.section}>
      {data?.news && (
        <BannersListWithSkeleton isLoading={isLoading} banners={data.news} />
      )}
    </section>
  );
};

export default LatestNews;

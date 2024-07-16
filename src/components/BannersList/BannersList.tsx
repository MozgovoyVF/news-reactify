import withSkeleton from "../../helpers/hoc/withSkeleton";
import { News } from "../../types/news.types";
import NewsBanner from "../NewsBanner/NewsBanner";
import styles from "./styles.module.css";

export interface IBannersList {
  banners: News[];
}

const BannersList = ({ banners }: IBannersList) => {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => (
        <NewsBanner key={banner.title} item={banner} />
      ))}
    </ul>
  );
};

const BannersListWithSkeleton = withSkeleton(BannersList, "banner", 10, "row");

export default BannersListWithSkeleton;

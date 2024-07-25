import withSkeleton from "@/shared/hoc/withSkeleton";
import styles from "./styles.module.css";
import { News, NewsBanner } from "@/entities/news";

export interface IBannersList {
  banners?: News[] | null;
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

const BannersListWithSkeleton = withSkeleton<IBannersList>(
  BannersList,
  "banner",
  10,
  "row"
);

export default BannersListWithSkeleton;

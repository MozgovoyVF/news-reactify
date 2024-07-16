import { FC } from "react";
import Skeleton from "../../components/Skeleton/Skeleton";
import { INewsBanner } from "../../components/NewsBanner/NewsBanner";
import { INewsList } from "../../components/NewsList/NewsList";
import { IBannersList } from "../../components/BannersList/BannersList";

function withSkeleton(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Components: FC<any>,
  type: "banner" | "item",
  count: number,
  direction: "row" | "column"
) {
  return function WithSkeleton(
    props: (INewsBanner | INewsList | IBannersList) & { isLoading: boolean }
  ) {
    const { isLoading, ...restProps } = props;

    if (isLoading) {
      return <Skeleton type={type} count={count} direction={direction} />;
    }

    return <Components {...restProps} />;
  };
}

export default withSkeleton;

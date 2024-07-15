import { FC } from "react";
import Skeleton from "../../components/Skeleton/Skeleton";
import { INewsBanner } from "../../components/NewsBanner/NewsBanner";
import { INewsList } from "../../components/NewsList/NewsList";

function withSkeleton(
  Component: FC<INewsBanner | INewsList>,
  type: "banner" | "item",
  count: number
) {
  return function WithSkeleton(
    props: (INewsBanner | INewsList) & { isLoading: boolean }
  ) {
    const { isLoading, ...restProps } = props;

    if (isLoading) {
      return <Skeleton type={type} count={count} />;
    }

    return <Component {...restProps} />;
  };
}

export default withSkeleton;

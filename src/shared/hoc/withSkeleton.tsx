import { SkeletonType, DirectionType } from "@/shared/types/news.types";
import { ComponentType } from "react";
import Skeleton from "../ui/Skeleton/Skeleton";

export interface IWithSkeleton {
  isLoading: boolean;
  direction?: DirectionType;
  type?: SkeletonType;
}

function withSkeleton<P extends object>(
  Components: ComponentType<P>,
  count?: number
) {
  return function WithSkeleton(props: P & IWithSkeleton) {
    const { isLoading, type, direction = "column", ...restProps } = props;

    if (isLoading) {
      return <Skeleton type={type} count={count} direction={direction} />;
    }

    return <Components type={type} {...(restProps as P)} />;
  };
}

export default withSkeleton;

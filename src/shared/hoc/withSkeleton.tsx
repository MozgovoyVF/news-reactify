import { SkeletonType, DirectionType } from "@/shared/types/news.types";
import { ComponentType } from "react";
import Skeleton from "../ui/Skeleton/Skeleton";

export interface IWithSkeleton {
  isLoading: boolean;
}

function withSkeleton<P extends object>(
  Components: ComponentType<P>,
  type?: SkeletonType,
  count?: number,
  direction?: DirectionType
) {
  return function WithSkeleton(props: P & IWithSkeleton) {
    const { isLoading, ...restProps } = props;

    if (isLoading) {
      return <Skeleton type={type} count={count} direction={direction} />;
    }

    return <Components {...(restProps as P)} />;
  };
}

export default withSkeleton;

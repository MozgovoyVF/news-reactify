import { ReactNode } from "react";
import Pagination from "../Pagination/Pagination";
import { IPagination } from "../../types/news.types";

interface IPaginationWrapper {
  top?: boolean;
  bottom?: boolean;
  children: ReactNode;
}

const PaginationWrapper = ({
  top,
  bottom,
  children,
  ...paginationProps
}: IPaginationWrapper & IPagination) => {
  return (
    <>
      {top && <Pagination {...paginationProps} />}
      {children}
      {bottom && <Pagination {...paginationProps} />}
    </>
  );
};

export default PaginationWrapper;

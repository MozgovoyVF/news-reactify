import { ReactNode } from "react";
import Pagination, { IPagination } from "../Pagination/Pagination";

interface IPaginationWrapper {
  top: boolean;
  bottom: boolean;
  children: ReactNode;
  paginationProps: IPagination;
}

const PaginationWrapper = ({
  top,
  bottom,
  children,
  paginationProps,
}: IPaginationWrapper) => {
  return (
    <>
      {top && <Pagination {...paginationProps} />}
      {children}
      {bottom && <Pagination {...paginationProps} />}
    </>
  );
};

export default PaginationWrapper;

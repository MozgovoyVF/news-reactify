import { ReactNode } from "react";
import PaginationButtons from "../PaginationButtons/PaginationButtons";
import { IPagination } from "../../model/types";

interface IPaginationWrapper {
  top?: boolean;
  bottom?: boolean;
  children: ReactNode;
}

const Pagination = ({
  top,
  bottom,
  children,
  ...paginationProps
}: IPaginationWrapper & IPagination) => {
  return (
    <>
      {top && <PaginationButtons {...paginationProps} />}
      {children}
      {bottom && <PaginationButtons {...paginationProps} />}
    </>
  );
};

export default Pagination;

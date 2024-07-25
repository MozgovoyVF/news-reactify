import { useTheme } from "@/app/providers/ThemeProvider";
import styles from "./styles.module.css";
import { IPagination } from "../../model/types";

const PaginationButtons = ({
  currentPage,
  totalPages,
  handleNextPage,
  handlePageClick,
  handlePreviousPage,
}: IPagination) => {
  const { isDark } = useTheme();

  return (
    <div
      className={`${styles.pagination} ${isDark ? styles.dark : styles.light}`}
    >
      <button
        disabled={currentPage <= 1}
        onClick={handlePreviousPage}
        className={styles.arrow}
      >
        {"<"}
      </button>

      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => (
          <button
            onClick={() => handlePageClick(index + 1)}
            className={styles.pageNumber}
            disabled={currentPage === index + 1}
            key={index}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <button
        disabled={currentPage >= totalPages}
        onClick={handleNextPage}
        className={styles.arrow}
      >
        {">"}
      </button>
    </div>
  );
};

export default PaginationButtons;

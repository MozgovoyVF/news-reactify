import styles from "./styles.module.css";

interface ICategories {
  categories: string[];
  setSelectedCategory: (category: string | null) => void;
  selectedCategory: string | null;
}

const Categories = ({
  categories,
  setSelectedCategory,
  selectedCategory,
}: ICategories) => {
  return (
    <div className={styles.categories}>
      <button
        onClick={() => setSelectedCategory(null)}
        className={!selectedCategory ? styles.active : styles.item}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          onClick={() => setSelectedCategory(category)}
          className={
            selectedCategory === category ? styles.active : styles.item
          }
          key={category}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;

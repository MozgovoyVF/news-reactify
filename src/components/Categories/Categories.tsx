import styles from "./styles.module.css";

interface ICategories {
  categories: string[];
  setSelectedCategory: (category: string) => void;
  selectedCategory: string;
}

const Categories = ({
  categories,
  setSelectedCategory,
  selectedCategory,
}: ICategories) => {
  return (
    <div className={styles.categories}>
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

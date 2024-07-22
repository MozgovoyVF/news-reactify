import { themeIcons } from "../../assets";
import { useTheme } from "../../context/ThemeContext";
import { formatDate } from "../../helpers/formatDate";
import styles from "./styles.module.css";

const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header
      className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
    >
      <div className={styles.info}>
        <h1 className={styles.title}>NEW REACTIFY</h1>
        <p className={styles.date}>{formatDate(new Date())}</p>
      </div>

      <img
        src={isDark ? themeIcons.dark : themeIcons.light}
        className={styles.image}
        alt="icon"
        onClick={toggleTheme}
      />
    </header>
  );
};

export default Header;

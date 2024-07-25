import { useTheme } from "@/app/providers/ThemeProvider";
import styles from "./styles.module.css";
import { themeIcons } from "@/shared/assets";

const ThemeButton = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <img
      src={isDark ? themeIcons.dark : themeIcons.light}
      className={styles.image}
      alt="icon"
      onClick={toggleTheme}
    />
  );
};

export default ThemeButton;

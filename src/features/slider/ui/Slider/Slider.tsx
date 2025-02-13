import { ReactElement, cloneElement, useRef } from "react";
import styles from "./styles.module.css";
import { useTheme } from "@/app/providers/ThemeProvider";

const Slider = ({
  children,
  step = 150,
}: {
  children: ReactElement;
  step?: number;
}) => {
  const sliderRef = useRef<HTMLElement | null>(null);

  const { isDark } = useTheme();

  const scrollLeft = () => {
    if (sliderRef?.current) {
      sliderRef.current.scrollLeft -= step;
    }
  };

  const scrollRight = () => {
    if (sliderRef?.current) {
      sliderRef.current.scrollLeft += step;
    }
  };
  return (
    <div className={`${styles.slider} ${isDark ? styles.dark : styles.light}`}>
      <button onClick={scrollLeft} className={styles.arrow}>{`<`}</button>
      {cloneElement(children, { ref: sliderRef })}
      <button onClick={scrollRight} className={styles.arrow}>{`>`}</button>
    </div>
  );
};

export default Slider;

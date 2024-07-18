/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ReactElement, cloneElement, useRef } from "react";
import styles from "./styles.module.css";

const Slider = ({
  children,
  step = 150,
}: {
  children: ReactElement;
  step?: number;
}) => {
  const sliderRef = useRef<ReactElement | null>(null);

  const scrollLeft = () => {
    if (sliderRef?.current) {
      /** @ts-ignore  */
      sliderRef.current.scrollLeft -= step;
    }
  };

  const scrollRight = () => {
    if (sliderRef?.current) {
      /** @ts-ignore  */
      sliderRef.current.scrollLeft += step;
    }
  };
  return (
    <div className={styles.slider}>
      <button onClick={scrollLeft} className={styles.arrow}>{`<`}</button>
      {cloneElement(children, { ref: sliderRef })}
      <button onClick={scrollRight} className={styles.arrow}>{`>`}</button>
    </div>
  );
};

export default Slider;

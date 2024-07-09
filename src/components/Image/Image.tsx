import styles from "./styles.module.css";

interface IImage {
  image?: string;
}

const Image = ({ image }: IImage) => {
  return (
    <div className={styles.wrapper}>
      {image ? <img src={image} alt="news" className={styles.image} /> : null}
    </div>
  );
};

export default Image;

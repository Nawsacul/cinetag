import styles from "./Banner.module.css";

const Banner = ({ img }) => {
  return (
    <div
      className={styles.capa}
      style={{ backgroundImage: `url('/images/banner-${img}.png')` }}
    ></div>
  );
};

export default Banner;

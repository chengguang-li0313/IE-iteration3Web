import styles from "../styles/Home.module.css";

export const ControlCard = (props) => {
  const { title, img, href } = props;

  return (
    <div className={styles.cardFront}>
      <img src={img}></img>
      <p>{title}</p>
      <a href={href}>Explore</a>
    </div>
  );
};

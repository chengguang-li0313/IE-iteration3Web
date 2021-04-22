import styles from "../styles/Control.module.css";

export const ControlCard = (props) => {
    const { title, sub, img, url } = props;

    return (
        <div className={styles.controlCard}>
            <div className={styles.controlCardContainer}>
                <div className={styles.controlCardInfo}>
                    <h1>{title}</h1>
                    <p>{sub}</p>
                    <a href={url}>Learn More</a>
                </div>
            </div>
            <img src={img}></img>
        </div>
    );
};

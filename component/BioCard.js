import styles from '../styles/BioCard.module.scss'

export const BioCard = (props) => {
    const { title, desc, img } = props;

    return (
        <div className={styles["post"]}>
        <div className={styles["header_post"]}>
            <img src={img} alt=""/>
        </div>

        <div className={styles["body_post"]}>
            <div className={styles["post_content"]}>

                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
        </div>
    </div>
    );
};
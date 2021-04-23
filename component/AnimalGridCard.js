import cardStyles from '../styles/AnimalGrid.module.scss'

export const AnimalGridCard = (props) => {
    const {title, desc} = props;

    return (
        <div className={cardStyles['blog-card']}>
            <div className={cardStyles["title-content"]}>
            <h3>{title}</h3>
            <hr />
            </div>
            <div className={cardStyles["card-info"]}>
            {desc} 
            </div>
            <div className={cardStyles["gradient-overlay"]}></div>
            <div className={cardStyles["color-overlay"]}></div>
        </div>
    );
};
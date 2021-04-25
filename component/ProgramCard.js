import styles from '../styles/ProgramCard.module.scss'

export const ProgramCard = (props) => {
    const {title, desc, href} = props;

    return (
      <a className={styles["card1"]} href={href} target="_blank">
        <h3>{title}</h3>
        <p className="small">
          {desc}
        </p>
        <div className="go-corner" href="#">
          <div className="go-arrow">→</div>
        </div>
      </a>
    );
}
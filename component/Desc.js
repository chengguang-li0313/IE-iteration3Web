import styles from '../styles/Home.module.css'

export const Desc = () => {
    return (
        <>
        <h1 id='desc' className={styles.heading2}>Invasive Animals</h1>
        <div className={styles.desc}>
            <img src='/fox.png' className={styles.descImg1}></img>
            <p className={styles.descText1}>Foxes are an established pest animal in the state of Victoria</p>

            <img src='/rabbit.png' className={styles.descImg2}></img>
            <p className={styles.descText2}>Rabbits have been significant pests in Australia since they were released near Geelong, Victoria in 1860.</p>

            <img src='/pig.png' className={styles.descImg3}></img>
            <p className={styles.descText3}>Feral pigs are a serious environmental and agricultural pest across Victoria</p>

            <img src='/dog.jpeg' className={styles.descImg4}></img>
            <p className={styles.descText4}>The feral and wild populations of dogs are an established pest animal under the Catchment and Land Protection Act (1994) in Victoria.</p>

            <img src='/goat.png' className={styles.descImg5}></img>
            <p className={styles.descText5}>Feral pigs are a serious environmental and agricultural pest across Victoria</p>
        </div>
        </>
    )
}
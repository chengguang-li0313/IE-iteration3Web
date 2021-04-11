import { useState } from "react";
import { AnimalCard } from './AnimalCard'
import styles from '../styles/Animals.module.css'

export const AnimalSection = () => {
    
    return (
        <div className={styles.animalSection}>
            <AnimalCard
                title={'Fox'}
                img={'/fox.png'}
                href={'/animals/fox'}
                url={'https://ie-iteration1.herokuapp.com/api/fox'}
            ></AnimalCard>

            <AnimalCard
                title={'Pig'}
                img={'/pig.png'}
                href={'/animals/pig'}
                url={'https://ie-iteration1.herokuapp.com/api/pig'}
            ></AnimalCard>

            <AnimalCard
                title={'Goat'}
                img={'/goat.png'}
                href={'/animals/goat'}
                url={'https://ie-iteration1.herokuapp.com/api/goat'}
            ></AnimalCard>

            <AnimalCard
                title={'Cat'}
                img={'/cat.png'}
                href={'/animals/goat'}
                url={'https://ie-iteration1.herokuapp.com/api/cat'}
            ></AnimalCard>

            <AnimalCard
                title={'rabbit'}
                img={'/rabbit.png'}
                href={'/animals/rabbit'}
                url={'https://ie-iteration1.herokuapp.com/api/rabbit'}
            ></AnimalCard>
        </div>
        

    );
};

import { useEffect } from 'react'
import { Nav } from '../../component/Nav'
import styles from '../../styles/Animals.module.css'
import AnimalDetails from '../../component/AnimalDetails'
import axios from 'axios';

export default function Animals() {
    useEffect(async () => {
        const result = await axios.get('https://ie-iteration1.herokuapp.com/api/fox');
        console.log(result.data)
        setData(result.data);
      }, []);

    return (
        <>
            <Nav></Nav>
            
            {/* <AnimalDetails></AnimalDetails> */}
            <div className={styles.animalDetails}>


            </div>
        </>
    )
}
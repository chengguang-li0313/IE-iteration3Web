import { ProgramCard } from '../component/ProgramCard'
import styles from '../styles/Control.module.css'

export const ProgramCardSection = () =>{
    return (
    <div className={styles.controlSection}>
        <div className={styles.controlRow}>
            <ProgramCard
                title={'Integrated Feral Goat Program'}
                desc={'Advice and guidance on designing a feral goat control program'}
                href={'https://agriculture.vic.gov.au/biosecurity/pest-animals/invasive-animal-management/integrated-feral-goat-control'}
            ></ProgramCard>
            <ProgramCard
                title={'Integrated Rabbit Control Program'}
                desc={'Rabbits are one of Australia’s most serious pest animals'}
                href={'https://agriculture.vic.gov.au/biosecurity/pest-animals/invasive-animal-management/integrated-rabbit-control'}
            ></ProgramCard>
            <ProgramCard
                title={'Integrated Wild Dog Control'}
                desc={'In Victoria, feral or wild populations of dog are declared established pest animals and are subject to integrated management '}
                href={'https://agriculture.vic.gov.au/biosecurity/pest-animals/invasive-animal-management/integrated-wild-dog-control'}
            ></ProgramCard>
        </div>
       
       <div className={styles.controlRow1}>
            <ProgramCard
                title={'Integrated Fox Control'}
                desc={'In Victoria, red foxes are established pest animals under the Catchment and Land Protection Act 1994'}
                href={'https://agriculture.vic.gov.au/biosecurity/pest-animals/invasive-animal-management/integrated-fox-control'}
            ></ProgramCard>
            <ProgramCard
                title={'Integrated Feral Pig Control'}
                desc={'In Victoria, feral or wild populations of pigs are declared as established as pest animals under the Catchment and Land Protection Act 1994.'}
                href={'https://agriculture.vic.gov.au/biosecurity/pest-animals/invasive-animal-management/integrated-feral-pig-control'}
            ></ProgramCard>
       </div>
    </div>
    )
}
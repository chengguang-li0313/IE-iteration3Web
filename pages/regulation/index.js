import styles from "../../styles/Regulation.module.scss";
import { RegulationHero } from '../../component/RegulationHero'
import { Layout } from "../../component/Layout";
import textStyle from "../../styles/Text.module.css";

export default function Regulation() { 
    return ( 
        <Layout> 
      <RegulationHero> </RegulationHero>
      <div className={styles.container}>
      <div className={textStyle.body}>
          <div className={textStyle.div}>           
                    Regulations 
          </div>
      </div>

      <div className={styles.band}>
        <div className={styles.item1}>
          <a href="https://www.legislation.gov.au/Details/C2016C00999" className={styles.card}  target="blank">
            <div className={styles.thumb + " " +styles.regulation1}></div>
            <div className={styles.article}>
              <h1>Agricultural and Veterinary Chemicals Code Act 1994</h1>
              <span>An Act to make provision for the evaluation, registration and control of agricultural and veterinary chemical products, and for related matters.</span>
            </div>
          </a>         
        </div>
        <div className={styles.item2}>
          <a href="https://www.legislation.gov.au/Details/C2021C00182" className={styles.card} target="blank">
            <div className={styles.thumb + " " +styles.regulation2}></div>
            <div className={styles.article}>
            <h1>Environment Protection and Biodiversity Conservation Act 1999</h1>
              <span>An Act relating to the protection of the environment and the conservation of biodiversity, and for related purposes.</span>
            </div>
          </a>
        </div>
        <div className={styles.item3}>
          <a href="https://content.legislation.vic.gov.au/sites/default/files/2020-04/86-46aa096%20authorised.pdf" className={styles.card} target="blank">
            <div className={styles.thumb + " " +styles.regulation3}></div>
            <div className={styles.article}>
            <h1>Prevention of Cruelty to Animals Act 1986</h1>
              <span>The purpose of this act is to prevent cruelty to animals and to encourage the considerate treatment of animals; and to improve the level of community awareness about the prevention of cruelty to animals.</span>
            </div>
          </a>
        </div>
        <div className={styles.item4}>
          <a href="https://content.legislation.vic.gov.au/sites/default/files/2020-12/94-52aa066%20authorised.pdf" className={styles.card} target="blank">
            <div className={styles.thumb + " " +styles.regulation4}></div>
            <div className={styles.article}>
            <h1>Catchment and Land Protection Act 1994</h1>
              <span>The purpose of this act is to set up a framework for the integrated management and protection of catchments; to encourage community participation in the management of land and water resources; to set up a system of controls on noxious weeds and pest animals; to repeal and amend various Acts concerning catchment and land management.</span>
            </div>
          </a>
        </div>
        <div className={styles.item5}>
          <a href="https://content.legislation.vic.gov.au/sites/default/files/209b5659-079e-37fd-a7c8-3b32d5b899b0_92-46aa056%20authorised.pdf" className={styles.card} target="blank">
            <div className={styles.thumb + " " +styles.regulation5}></div>
            <div className={styles.article}>
            <h1>Agriculture and Veterinary Chemicals (Control of Use) Act 1992</h1>
              <span>The purpose of this act is to to impose controls in relation to the use, application and sale of agricultural and veterinary chemical products, fertilisers and stock foods and the manufacture of fertilisers and stock foods.</span>
            </div>
          </a>
        </div>
        <div className={styles.item6}>
          <a href="https://content.legislation.vic.gov.au/sites/default/files/85877eed-1917-39a0-9f5e-3dd3948be0a8_81-9719aa128%20authorised.pdf" className={styles.card} target="blank">
            <div className={styles.thumb + " " +styles.regulation6}></div>
            <div className={styles.article}>
            <h1>Drugs, Poisons and Controlled Substances Act 1981</h1>
              <span>The purpose of this act is to control the use of poisons and chemical products. </span>
            </div>
          </a>
        </div>
        <div className={styles.item7}>
          <a href="https://content.legislation.vic.gov.au/sites/default/files/2020-12/75-8699aa125%20authorised.pdf" className={styles.card} target="blank">
            <div className={styles.thumb + " " +styles.regulation7}></div>
            <div className={styles.article}>
            <h1>Wildlife Act 1975</h1>
              <span>The purpose of this act is to promote protection of wildlife, prevent extinction, sustainable use and access of wildlife, and to prohibit and regulate the conduct of persons engaged in activities concerning or related to wildlife.</span>
            </div>
          </a>
        </div> 
        </div> 
      </div>
      </Layout>
    );
  }

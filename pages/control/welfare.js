import styles from '../../styles/Welfare.module.css'
import { Layout } from "../../component/Layout";

export default function Welfare() {
    return (
      <Layout>
        <div className={styles.container}>
          <h1>Animal Welfare</h1>
          <div className={styles.section}>
            <img src="/welfare1.jpeg"></img>
            <div className={styles.text}>
              <p>
                While controlling and eradicating pest animals from your farm is
                of the utmost importance in order to save your land from
                impacting agriculture and livestock, it is also important to
                make sure that no other animals are harmed/injured while
                conducting pest control activities. The Victorian Government has
                come up with different strategies to minimise damage to other
                animals/nature while conducting pest control which is called as
                the Human Vertebrate pest control.
              </p>
              <p>
                Human Vertebrate Pest is the development and selection of
                feasible control programs and techniques that avoid or minimise
                pain, suffering and distress to target and non-target animals in
                vertebrate pest control programs.
              </p>
            </div>
          </div>

          <h1>Latest News about Animal Welfare Legislation</h1>
          <div className={styles.section}>
            <img src="/welfare2.jpeg"></img>
            <div className={styles.text}>
              <p>
                The Victorian Government has committed to modernising Victoria’s
                key animal welfare legislation. The new Act would replace the
                current Prevention of Cruelty to Animals Act 1986. It is planned
                to be released in about the first half of 2021.
              </p>
            </div>
          </div>

          <h1>Code of Practice for Welfare of Animals in Hunting</h1>
          <div className={styles.section}>
            <img src="/welfare3.png"></img>
            <div className={styles.text}>
              <p>
                This Code aims to prevent cruelty and encourage the considerate
                treatment of animals that are hunted or used for hunting.
              </p>
            </div>
          </div>

          <h1>Introduction</h1>
          <p>
            Animal welfare is both a moral obligation and a legal requirement
            for all ethical hunters. Hunters have a genuine appreciation for
            animals and recognise the importance of animal welfare. While
            considering how to control and manage pest species, please do not
            forget to consider the welfare of pest animals. Any pest animal
            should always be hunted as humane as possible. This is in line with
            animal welfare legislation and community expectations.
          </p>

          <h1>1. Hunter Conduct : Minimum Standards</h1>
          <div className={styles.section}>
            <img src="/welfare4.png"></img>
            <div className={styles.text}>
              <p>
                1. Hunted animals must at all times be free and unrestricted in
                the wild.
              </p>
              <p>
                2. Firearms and ammunition or bows and arrows must be used that
                will humanely kill the species being hunted.
              </p>
              <p>3. An animal must only be shot at when:</p>
              <ul>
                <li>it can be clearly seen and recognised;</li>
                <li>
                  it is within the effective range of the firearm, ammunition,
                  or bow and arrow and the skills of the hunter; and
                </li>
                <li>a humane kill is likely.</li>
              </ul>
              <p>
                4. Shooting an animal in the wild for the purpose of testing the
                proficiency of hunters, or hunting equipment, is not permitted.
              </p>
              <p>5. A hunter must shoot to cause a quick and painless death.</p>
            </div>
          </div>

          <h1>Recommended Best Practices</h1>
          <p>
            1. Nets may be used to catch foxes that have gone to ground, or
            rabbits forced from burrows by ferrets. No other devices should be
            used to restrict animals to an area.
          </p>
          <p>2. To produce a quick and painless death a hunter should:</p>
          <ul>
            <li>
              shoot to hit the area occupied by the brain or heart of an animal
              when using a rifle;
            </li>
            <li>
              shoot to have the animal in the centre of the pattern at the point
              of impact when using a shotgun;
            </li>
            <li>
              shoot to hit the heart/lung area when using a bow and arrow.
            </li>
          </ul>
          <h1>Code of Practice for Welfare of Animals for Trapping</h1>
          <p>
            The sale and use of all traps in Victoria is regulated under
            Sections 15 and 15AB of the{" "}
          </p>
          <a
            href="https://www.legislation.vic.gov.au/in-force/acts/prevention-cruelty-animals-act-1986/095"
            target="_blank"
          >
            Prevention of Cruelty to Animals Act 1986
          </a>
          <p>and the</p>
          <a
            href="https://www.legislation.vic.gov.au/in-force/statutory-rules/prevention-cruelty-animals-regulations-2019/002"
            target="_blank"
          >
            Prevention of Cruelty to Animals Regulations 2019.
          </a>
          <p>
            Ministerial approval is required to use of some types of traps and,
            in some circumstances, the locations where certain traps can be
            used.
          </p>
          <h1>Useful Links</h1>
          <ul>
            <li>
              <a
                href="http://www.environment.gov.au/biodiversity/invasive-species/publications/model-codes-practice-feral-animals"
                target="_blank"
              >
                Model Codes of Practice and Standard Operating Procedures for
                humane vertebrate pest control
              </a>
            </li>
            <li>
              <a
                href="http://www.agriculture.gov.au/animal/welfare/aaws/humaneness-of-pest-animal-control-methods"
                target="_blank"
              >
                A Model for Assessing the Relative Humaneness of Pest Animal
                Control Methods
              </a>
            </li>
            <li>
              <a href="https://invasives.com.au/" target="_blank">
                Invasive Animals Cooperative Research Centre
              </a>
            </li>
          </ul>
        </div>
      </Layout>
    );
}
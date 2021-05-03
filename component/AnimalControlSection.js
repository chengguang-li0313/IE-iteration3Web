import styles from "../styles/Animals.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CardWithButton } from '../component/CardWithButton'

export const AnimalControlSection = (props) => {
    const { data } = props

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1500 },
            items: 3,
        },
        desktop: {
            breakpoint: { max: 1500, min: 1024 },
            items: 2,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const controlMethods = data ? data.map((controlMethod) => {
        return <CardWithButton 
        title={controlMethod.eradication.name}
        img={controlMethod.eradication.image}
        text={controlMethod.eradication.description}
        href={controlMethod.eradication.readMore}
        ></CardWithButton>;
    }) : <CardWithButton title={'Loading'}></CardWithButton>;

    console.log(data)
    return (
        <>
        <Carousel 
            responsive={responsive} 
            showDots={true}
            > 
            {controlMethods}
         </Carousel>
        </>
    );
};

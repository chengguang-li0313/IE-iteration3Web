import styles from "../styles/RegulationSection.module.scss";
import React, {useEffect, useRef} from "react";
import textStyle from "../styles/Text.module.css";
import Link from 'next/link'
import styleButton from '../styles/Button.module.css';

const slideWidth = 30;

const _items = [
    {
        player: {
            title: 'Agricultural and Veterinary Chemicals Code Act 1994',
            desc: 'Known as "The Magician", Efren Reyes is well regarded by many professionals as the greatest all around player of all time.',
            image: 'https://i.loli.net/2021/04/25/czbhioV5epO3wEA.jpg',
        },
    },
    {
        player: {
            title: "Environment Protection and Biodiversity Conservation Act 1999",
            desc: "An Act relating to the protection of the environment and the conservation of biodiversity, and for related purposes.",
            image: 'https://i.loli.net/2021/04/25/54qONRy2rjVvIGh.jpg',
        },
    },
    {
        player: {
            title: 'Prevention of Cruelty to Animals Act 1986',
            desc: 'The purpose of this act is to prevent cruelty to animals and to encourage the considerate treatment of animals; and to improve the level of community awareness about the prevention of cruelty to animals.',
            image: 'https://i.loli.net/2021/04/25/sqV6nZRxHTe9cpM.jpg',
        },
    },
    {
        player: {
            title: 'Catchment and Land Protection Act 1994',
            desc: 'The purpose of this act is to set up a framework for the integrated management and protection of catchments; to encourage community participation in the management of land and water resources; ',
            image: 'https://i.loli.net/2021/04/25/ANQUvLgJknEyZt7.jpg',
        },
    },
    {
        player: {
            title: 'Agriculture and Veterinary Chemicals Act 1992',
            desc: 'The purpose of this act is to to impose controls in relation to the use, application and sale of agricultural and veterinary chemical products',
            image: 'https://i.loli.net/2021/04/25/ylbMDpnhBkd7OxK.png',
        },
    },
    {
        player: {
            title: 'Drugs, Poisons and Controlled Substances Act 1981',
            desc: 'The purpose of this act is to control the use of poisons and chemical products.',
            image: 'https://i.loli.net/2021/04/25/3DIzNOoUlmBxg57.jpg',
        },
    },
    {
        player: {
            title: 'Wildlife Act 1975',
            desc: 'The purpose of this act is to promote protection of wildlife, prevent extinction, sustainable use and access of wildlife, and to prohibit and regulate the conduct of persons engaged in activities concerning or related to wildlife.',
            image: 'https://i.loli.net/2021/04/25/WBeiRS2gvnqmxrM.jpg',
        },
    },
];

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
    const item = {
        styles: {
            transform: `translateX(${position * slideWidth}rem)`,
        },
        player: _items[idx].player,
    };

    switch (position) {
        case length - 1:
        case length + 1:
            item.styles = {...item.styles, filter: 'grayscale(1)'};
            break;
        case length:
            break;
        default:
            item.styles = {...item.styles, opacity: 0};
            break;
    }

    return item;
};

const CarouselSlideItem = ({pos, idx, activeIdx}) => {
    const item = createItem(pos, idx, activeIdx);

    return (
        
        <li className={styles.carouselslideitem} style={item.styles}>
            <div className={styles.carouselslideitemimglink}>
                <img src={item.player.image} alt={item.player.title} />
            </div>
            <div className={styles.carouselslideitembody}>
                <div className={styles.h4}>{item.player.title}</div>
                <div className={styles.p}>{item.player.desc}</div>
            </div>
        </li>
    );
};

const keys = Array.from(Array(_items.length).keys());

const Regulation = () => {
    const [items, setItems] = React.useState(keys);
    const [isTicking, setIsTicking] = React.useState(false);
    const [activeIdx, setActiveIdx] = React.useState(0);
    const bigLength = items.length;

    const prevClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map((_, i) => prev[(i + jump) % bigLength]);
            });
        }
    };

    const nextClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map(
                    (_, i) => prev[(i - jump + bigLength) % bigLength],
                );
            });
        }
    };

    const handleDotClick = (idx) => {
        if (idx < activeIdx) prevClick(activeIdx - idx);
        if (idx > activeIdx) nextClick(idx - activeIdx);
    };

    React.useEffect(() => {
        if (isTicking) sleep(300).then(() => setIsTicking(false));
    }, [isTicking]);

    React.useEffect(() => {
        setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
    }, [items]);

    return (
        <div className={styles.carouselwrap}>
            <div className={styles.carouselinner}>
                <button className={styles.carouselbtn + " " + styles.carouselbtnprev} onClick={() => prevClick()}>
                    <i className={styles.carouselbtnarrow + " " + styles.carouselbtnarrowleft} />
                </button>
                 {/* add title in here  */}
              {/* <div className={textStyle.body}>
                   
                 <div className={textStyle.div}>               
                    Regulations 
                  </div>
                 </div> */}
              <div className={styles.text}>
                  Regulations
              </div>
              <div className={styles.text1}>
              All legislations you need to know about erdicating feral animals
              </div>
              {/* button  */}
              <Link href='/regulation'> 
                <button className={styleButton.button}>
                    Learn More
                </button>
                </Link>

                <div className={styles.carouselcontainer}>
                    <ul className={styles.carouselslidelist}>
                        {items.map((pos, i) => (
                            <CarouselSlideItem
                                key={i}
                                idx={i}
                                pos={pos}
                                activeIdx={activeIdx}
                            />
                        ))}
                    </ul>
                </div>
                <button className={styles.carouselbtn + " " + styles.carouselbtnnext} onClick={() => nextClick()}>
                    <i className={styles.carouselbtnarrow + " " + styles.carouselbtnarrowright} />
                </button>
                <div className={styles.carouseldots}>
                    {items.slice(0, length).map((pos, i) => (
                        <button
                            key={i}
                            onClick={() => handleDotClick(i)}
                            className={i === activeIdx ? `styles.dot+" "+styles.active` : 'styles.dot'}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

// Regulation.render(<Regulation />, document.getElementById('root'));
export default Regulation;
import styled from 'styled-components'
import {MdArrowForward,MdKeyboardArrowRight} from 'react-icons/md'

export const clusterLayer = {
  id: 'clusters',
  type: 'circle',
  source: 'earthquakes',
  filter: ['has', 'point_count'],
  paint: {
    'circle-color': ['step', ['get', 'point_count'], '#51bbd6', 100, '#f1f075', 750, '#f28cb1'],
    'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 40]
  }
};

export const clusterCountLayer = {
  id: 'cluster-count',
  type: 'symbol',
  source: 'earthquakes',
  filter: ['has', 'point_count'],
  layout: {
    'text-field': '{point_count_abbreviated}',
    'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
    'text-size': 12
  }
};

export const unclusteredPointLayer = {
  id: 'unclustered-point',
  type: 'circle',
  source: 'earthquakes',
  filter: ['!', ['has', 'point_count']],
  paint: {
    'circle-color': '#11b4da',
    'circle-radius': 4,
    'circle-stroke-width': 1,
    'circle-stroke-color': '#fff'
  }
};

export const TextContent = styled.div`
z-index: 10;
 max-width: 1700px;
width: 70%;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
// align-items: center;
top: 2%;
left: 18%;
`;

export const HeroText = styled.h2`
margin-top: 4px;
color: #fff;
font-size: 2.4rem;
text-align: center;
max-width: 600px;

@media only screen and (max-width: 768px){
  font-size: 2rem;
}

@media only screen and (max-width: 480px){
  font-size: 1.8rem;
}
`;

export const HeroBtn = styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;
`;


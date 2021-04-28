import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components';


export const Button = styled.section`
border-radius: 50px;
background: ${({primary}) => (primary? '#01BF71': '#010606')};
white-space: nowrap;
padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
color: ${({dark}) => (dark ? '#fff' : '#010606')};
font-size: ${({fontBig}) => (fontBig? '20px': '16px')};
font-weight: 700;
outline: none;
text-decoration: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all .4s ease;
box-shadow: 0 5px 10px rgba(0,0,0, .2);

&:active{
  transform: translateY(1rem);
}

&:hover{
  background: ${({primary}) => (primary ? '#fff':'#01BF71')}; 
  color: ${({dark}) => (dark ? '#010606' : '#fff')};
  transform: translateY(-1rem);
}
`;
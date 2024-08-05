import styled from 'styled-components';

import ball from '../../../assets/svg/ball.svg';

const SizeButtons = styled.button`
position: relative;
width: 50px;
height: 50px;
margin: 5px 5px;
border: 0;
outline: 0;
background-image: url(${ball});
background-color: transparent;
background-size: contain;
background-repeat: no-repeat;
background-position: center center;
cursor: pointer;
transition: .3s;
&:hover {
  filter: invert(20%);
}
&:nth-child(1) {  
  margin-left: 20px;
}
&:nth-child(2) {  
  background-size: 40px 40px;
}
&:nth-child(3) {  
  background-size: 32px 32px;
  margin-left: 0;
}
`;

const SizeButtonActive = styled(SizeButtons)`
filter: invert(9%) sepia(63%) saturate(461%) hue-rotate(322deg) brightness(83%) contrast(88%); 
`;

export { SizeButtons, SizeButtonActive };

import styled from 'styled-components';

import ball from '../../../assets/svg/ball.svg';
import bell from '../../../assets/svg/bell.svg';
import cone from '../../../assets/svg/cone.svg';
import snowflake from '../../../assets/svg/snowflake.svg';
import toy from '../../../assets/svg/toy.svg';

const ShapeButtons = styled.button`
position: relative;
width: 40px;
height: 40px;
margin: 10px 7px;
border: 0;
outline: 0;
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
  background-image: url(${ball});
  margin-left: 20px;
}
&:nth-child(2) {
  background-image: url(${bell});
}
&:nth-child(3) {
  background-image: url(${cone});
}
&:nth-child(4) {
  background-image: url(${snowflake});
}
&:nth-child(5) {
  background-image: url(${toy});
}
`;

const ShapeButtonsActive = styled(ShapeButtons)`
filter: invert(9%) sepia(63%) saturate(461%) hue-rotate(322deg) brightness(83%) contrast(88%);
`;

export { ShapeButtons, ShapeButtonsActive };

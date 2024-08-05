import styled from 'styled-components';

const ColorButtons = styled.button`
position: relative;
width: 30px;
height: 30px;
margin: 15px 10px;
border: 1px solid #278D9F;
border-radius: 5px;
outline: 0;
background-color: transparent;
cursor: pointer;
transition: .3s;
&:hover {
  border-color: #ccc;
  opacity: 0.6;
}
&:nth-child(1) {
  background-color: #fff;
  margin-left: 20px;
}
&:nth-child(2) {
  background-color: #FDD700;
}
&:nth-child(3) {
  background-color: #FD0000;
}
&:nth-child(4) {
  background-color: #2199EB;
}
&:nth-child(5) {
  background-color: #08AA05;
}
`;

const ColorButtonsActive = styled(ColorButtons)`
::after {
  content: '';
  display: block;
  position: absolute;
  top: 5px;
  left: 9px;
  width: 6px;
  height: 10px;
  border: solid #fff;
  border-width: 0 4px 4px 0;
  transform: rotate(45deg);
}
&:nth-child(1)::after {  
  border-color: #666;
}
  `;

export { ColorButtons, ColorButtonsActive };

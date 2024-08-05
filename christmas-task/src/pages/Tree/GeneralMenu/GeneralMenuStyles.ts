import styled from 'styled-components';

import audio from '../../../assets/svg/audio.svg';
import snow from '../../../assets/svg/snow.svg';

const GeneralMenuContainer = styled.div`
display: flex;
flex-wrap: wrap;
align-items: flex-start;
align-content: flex-start;
height: 100%;
width: 400px;
padding-top: 25px;
`;

const MenuContainer = styled.div`
display: flex;
flex-wrap: wrap;
gap: 10px;
width: 100%;
justify-content: flex-start;
align-items: flex-start;
align-content: flex-start;
margin-bottom: 20px;
::before{
  width: 100%;
  font-size: 20px;
  font-weight: 400;
  padding: 10px;
  padding-left: 0;
  text-transform: uppercase;
}
`;

const SelectTreeContainer = styled(MenuContainer)`
::before {
  content: "Выберите ёлку";
}
`;

const SelectBgContainer = styled(MenuContainer)`
::before {
  content: "Выберите фон";
}
`;

const SelectGarlandContainer = styled(MenuContainer)`
display: flex;
justify-content: space-between;
align-items: center;
width: 360px;
height: 110px;
::before {
  content: "Выберите гирлянду";
}
`;

const Control = styled.div`
width: 80px;
height: 80px;
gap: 20px;
background-size: cover;
background-repeat: no-repeat;
background-position: center;
cursor: pointer;
&:hover {
  filter: invert(20%);
}
`;

const SnowControl = styled(Control)`
width: 40px;
height: 40px;
background-image: url(${snow});
`;

const AudioButton = styled(Control)`
width: 40px;
height: 40px;
margin-right: 40px;
background-image: url(${audio});
`;

const MenuItem = styled.div`
width: 80px;
height: 80px;
gap: 20px;
background-size: cover;
background-repeat: no-repeat;
background-position: center;
cursor: pointer;
`;

const TreeItem = styled(MenuItem)`
width: 115px;
height: 115px;
border-radius: 10px;
background-color: rgba(255, 255, 255, .5);
background-size: auto 110px;
&:hover{
  background-color: rgba(255, 255, 255, .25);
}
`;

const BgItem = styled(MenuItem)`
width: 65px;
height: 65px;
border: 1px solid #cccc;
border-radius: 10px;
background-color: rgba(255, 255, 255, .5);
background-size: cover;
background-repeat: no-repeat;
background-position: center;
cursor: pointer;
&:hover{
  opacity: 0.5;
}
`;

const GarlandOnOffContainer = styled.div`
display: flex;
align-items: center;
`;

const GarlandOnOffButton = styled.button`
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
backdrop-filter: blur(6px);
border: 1px solid #278D9F;
&:hover {
  background-color: #278D9F;
}
`;

const ActiveGarlandOnOffButton = styled(GarlandOnOffButton)`
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
`;

const GarlandButtonsContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 250px;
padding: 10px;
`;

const GarlandColorButton = styled.button`
width: 24px;
height: 24px;
border-radius: 50%;
`;

const MulticolorButton = styled(GarlandColorButton)`   
background: linear-gradient(
  124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8);
box-shadow: rgb(0 0 0 / 20%) 0 -1px 7px 1px, inset #441313 0 -1px 9px, #ccc 0 2px 12px;
`;

const RedButton = styled(GarlandColorButton)` 
background-color: #F00;
box-shadow: rgb(0 0 0 / 20%) 0 -1px 7px 1px, inset #441313 0 -1px 9px, rgb(255 0 0 / 50%) 0 2px 12px;
`;

const BlueButton = styled(GarlandColorButton)`
background-color: #24E0FF;
box-shadow: rgb(0 0 0 / 20%) 0 -1px 7px 1px, inset #006 0 -1px 9px, #3f8cff 0 2px 14px;
`;

const YellowButton = styled(GarlandColorButton)`
background-color: #FF0;
box-shadow: rgb(0 0 0 / 20%) 0 -1px 7px 1px, inset #808002 0 -1px 9px, #ff0 0 2px 12px;
`;

const GreenButton = styled(GarlandColorButton)`
background-color: #ABFF00;
box-shadow: rgb(0 0 0 / 20%) 0 -1px 7px 1px, inset #304701 0 -1px 9px, #89ff00 0 2px 12px;
`;

export {
  GeneralMenuContainer, MenuContainer, SnowControl, AudioButton, SelectTreeContainer, TreeItem, BgItem, SelectBgContainer, SelectGarlandContainer, GarlandOnOffContainer,
  GarlandOnOffButton, ActiveGarlandOnOffButton, GarlandButtonsContainer, MulticolorButton, RedButton, BlueButton, YellowButton, GreenButton,
};

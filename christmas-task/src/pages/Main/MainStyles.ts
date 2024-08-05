import styled from 'styled-components';

import { CustomPage } from '../../common/custom-styled-components/CustomPage';
import BigBallImg from '../../assets/ball/1.png';
import smallBallImg from '../../assets/ball/2.png';

const MainPage = styled(CustomPage)`    
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const Ball = styled.div`
position: absolute;
background-size: contain;
background-repeat: no-repeat;
::before {
  content: "";
  position: absolute;
  background-color: #aaa;
}
`;

const BigBallBg = styled(Ball)`
width: 500px;
height: 500px;
left: calc(50% - 550px);
top: 150px;
background-image: url(${BigBallImg});
::before {  
  top: -210px;
  left: calc(50% - 47px);
  width: 4px;
  height: 220px;
  width: 5px;
}
`;

const SmallBallBg = styled(Ball)`   
width: 300px;
height: 300px;
left: calc(50% + 150px);
top: 150px;
background-image: url(${smallBallImg});
::before {  
  top: -205px;
  left: calc(50% - 32px);
  width: 4px;
  height: 210px;
  width: 5px;
}
`;

const Title = styled.h1`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
align-content: center;
width: 600px;
height: 250px;
margin-bottom: 80px;
margin-top: 220px;
color: #fff;
font-weight: 400;
text-align: center;
border: 3px solid #278D9F;
border-radius: 25px;
background-color: rgba(31, 112, 127, .3);
backdrop-filter: blur(6px);
font-size: 48px;
`;

const TitleSpan = styled.span`
width: 100%;
`;

const CustomButton = styled.button`
position: relative;
width: 320px;
height: 60px;
border: 3px solid #278D9F;
border-radius: 30px;
background-color: rgba(31, 112, 127, .3);
backdrop-filter: blur(6px);
font-weight: 300;
font-size: 22px;
color: #fff;
cursor: pointer;
transition: .3s;
overflow: hidden;
outline: 1px solid;
outline-color: rgba(255, 255, 255, 0.5);
outline-offset: 0px;
transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
&:hover {
  outline-color: rgba(255, 255, 255, 0);
  outline-offset: 15px;
}
`;

export {
  MainPage, BigBallBg, SmallBallBg, Title, TitleSpan, CustomButton,
};

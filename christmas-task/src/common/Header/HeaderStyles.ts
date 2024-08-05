import styled from 'styled-components';
import { Link } from 'react-router-dom';

import search from '../../assets/svg/search.svg';
import selectedBall from '../../assets/svg/ball-2.svg';
import tree from '../../assets/svg/tree.svg';

const CustomHeader = styled.header`
position: relative;
background-color: #121C1E;
z-index: 2;
`;

const HeaderContainer = styled.div`    
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
max-width: 1600px;
height: 70px;
margin: 0 auto;
`;

const CustomNav = styled.nav`
margin-left: 10px;
display: flex;
justify-content: space-between;
align-items: center;
`;

const HeaderControls = styled.div`
margin-right: 10px;
display: flex;
align-items: center;
`;

const InputSearch = styled.input.attrs({
  type: 'search',
  autocomplete: 'off',
  placeholder: 'Поиск',
  autoFocus: true,
})` 
outline: 0;  
width: 330px;
height: 40px;
padding: 5px 25px;
margin: 10px 0;
margin-right: 30px;
border-radius: 20px;
border: 1px solid #278D9F;
color: #fff;
font-size: 18px;
background-color: rgba(31, 112, 127, .3);
background-image: url(${search});
background-size: 15px;
background-repeat: no-repeat;
background-position: 5px center;
backdrop-filter: blur(6px);
appearance: auto;
`;

const DivSelected = styled.div`
width: 48px;
height: 60px;
background-image: url(${selectedBall});
background-size: 48px 60px;
background-position: left -8px;
background-repeat: no-repeat;
transition: .3s;
`;

const DivSelectedSpan = styled.span`
display: inline-block;
min-width: 40px;
height: 40px;
margin-top: 10px;
margin-left: 4px;
border-radius: 50%;
text-align: center;
line-height: 40px;
font-size: 20px;
background-color: #278D9F;
`;

const NavLink = styled(Link)`
margin-right: 30px;
position: relative;
display: block;
font-size: 20px;
color: #fff;
text-transform: uppercase;
text-decoration: none;
padding: 20px;
transition: .3s;
&:nth-child(3) {
  margin-right: 0;
}
&:hover{
  color: #278D9F;
}
`;

const NavLogo = styled(NavLink)`
width: 48px;
height: 60px;
background-image: url(${tree});
background-size: contain;
background-repeat: no-repeat;
cursor: pointer;
&:hover {
  filter: invert(57%) sepia(100%) saturate(329%) hue-rotate(141deg) brightness(89%) contrast(90%);
}
`;

const ActiveNavPage = styled(NavLink)`
::after {
  content: "";
  position: absolute;
  bottom: 15px;
  left: 15px;
  right: 15px;
  height: 3px;
  background-color: #278D9F;
}
`;

export {
  CustomHeader, HeaderContainer, CustomNav, HeaderControls, InputSearch, DivSelected, DivSelectedSpan, NavLink, NavLogo, ActiveNavPage,
};

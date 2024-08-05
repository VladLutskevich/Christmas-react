import styled from 'styled-components';

import rss from '../../assets/svg/rss.svg';

const CustomFooter = styled.footer`
background-color: #121C1E;
`;

const FooterContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
max-width: 1600px;
height: 70px;
margin: 0 auto;
`;

const FooterData = styled.div`
margin-left: 10px;
display: flex;
align-items: center;
`;

const RssLink = styled.a`
margin-right: 10px;
width: 160px;
height: 60px;
background-size: contain;
background-repeat: no-repeat;
background-image: url(${rss});
transition: .3s;
&:hover {
  filter: invert(57%) sepia(100%) saturate(329%) hue-rotate(141deg) brightness(89%) contrast(90%);
}
`;

const Copyright = styled.p`
padding-right: 20px;
`;

const Year = styled.p``;

const Github = styled.a`
color: #fff;
text-decoration: none;
padding: 0 20px;
transition: .3s;
&:hover {
  color: #278D9F; 
}
`;

export {
  CustomFooter, FooterContainer, FooterData, RssLink, Copyright, Year, Github,
};

import React from 'react';

import {
  CustomFooter, FooterContainer, FooterData, RssLink, Copyright, Year, Github,
} from './FooterStyles';

const Footer = function () {
  return (
    <CustomFooter>
      <FooterContainer>
        <FooterData>
          <Copyright>©</Copyright>
          <Year>2021</Year>
          <Github href="https://github.com/VladLutskevich" target="_blank">Github</Github>
        </FooterData>
        <RssLink href="https://rs.school/js/" target="_blank" />
      </FooterContainer>
    </CustomFooter>
  );
};

export default Footer;

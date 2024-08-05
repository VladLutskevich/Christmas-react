import styled from 'styled-components';

import bg from '../../assets/bg.jpg';

const CustomPage = styled.main`    
min-width: 100%;
min-height: calc(100vh - 140px);
background-image: url(${bg});
background-size: cover;
background-attachment: fixed;
`;

const Blur = styled.div`    
background: rgba(22, 41, 41, 0.5);
backdrop-filter: blur(3px);
height: 100%;
min-height: calc(100vh - 140px);
width: 100%;
`;

export { CustomPage, Blur };

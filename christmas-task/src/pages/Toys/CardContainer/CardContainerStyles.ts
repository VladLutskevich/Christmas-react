import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
gap: 20px;
width: 100%;
max-width: 1600px;
margin: 0 auto;
padding-bottom: 40px;
`;

const CardDiv = styled.div`    
display: flex;
flex-wrap: wrap;
justify-content: space-between;
width: 304px;
height: 280px;
padding: 0;
padding-left: 10px;
border-radius: 10px;
border: 1px solid #278D9F;
background-color: rgba(31, 112, 127, .3);
backdrop-filter: blur(6px);
cursor: pointer;
`;

const CardTitle = styled.h2`
width: 100%;
font-size: 20px;
font-stretch: condensed;
padding-left: 10px;
`;

const CardImg = styled.img`
width: 90px;
height: 112px;
object-fit: contain;
pointer-events: none;
`;

const CardDescription = styled.div`
width: 195px;
margin-top: -20px;
padding-left: 10px;
pointer-events: none;
line-height: 1;
user-select: none;
`;

const SelectedDiv = styled.div`
position: absolute;
top: 210px;
width: 80px;
height: 40px;
background: #CBB77A;
left: -8px;
::before, 
::after {
  content: "";
  position: absolute;
  height: 0;
  width: 0;
}
::before {
  border-bottom: 8px solid #14455b;
  border-left: 8px solid transparent;
  top: -8px;
}
::after {
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-left: 15px solid #24C5DB;
  right: -15px;
  border-left: 15px solid #CBB77A;
}

`;

const NotSelectedDiv = styled(SelectedDiv)`
background: #24C5DB;
::after {
  border-left: 15px solid #24C5DB;
}
`;

export {
  Container, CardDiv, CardTitle, CardImg, CardDescription, SelectedDiv, NotSelectedDiv,
};

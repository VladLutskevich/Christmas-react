import styled from 'styled-components';

const Controls = styled.div`   
display: flex;
justify-content: space-around;
flex-wrap: wrap;
width: 100%;
max-width: 1600px;
font-size: 20px;
line-height: 40px;
margin: 0 auto;
padding-bottom: 40px;
padding-top: 20px;
`;

const FilterPart = styled.div`
width: 480px;
padding: 10px 20px;
border-radius: 10px;
background-color: rgba(31, 112, 127, .3);
backdrop-filter: blur(6px);
`;

const BigTitle = styled.div`
display: block;
height: 60px;
line-height: 60px;
text-transform: uppercase;
`;

const Parameters = styled.div`
display: flex;
align-items: center;
`;

const ResetButton = styled.button`
width: 250px;
height: 40px;
margin: 10px 0;
border-radius: 20px;
border: 1px solid #278D9F;
background-color: rgba(31, 112, 127, .3);
backdrop-filter: blur(6px);
cursor: pointer;
color: #fff;
font-size: 20px;
font-weight: 400;
font-family: 'Open Sans', sans-serif;
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

const Overlay = styled.div`
position: fixed; 
width: 100%;
height: 100%;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0,0,0,0.5);
z-index: 2;
`;

const Popup = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: fixed;
width: 350x;
top: 50%;
left: calc((100vw - 350px)/2);
border-radius: 10px;
border: 1px solid #278D9F;
background-color: rgba(31, 112, 127, .3);
backdrop-filter: blur(6px);
overflow: auto;
outline: none;
padding: 40px;
`;

const CloseButton = styled(ResetButton)`
width: 270px;
`;

export {
  Controls, FilterPart, BigTitle, Parameters, ResetButton, Overlay, Popup, CloseButton,
};

import styled from 'styled-components';

const GarlandContainer = styled.div`
display: flex;
justify-content: center;
height: calc(100vh - 540px);
width: 800px;
position: absolute;
top: 400px;
left: 50%;
margin-left: -400px;
pointer-events: none;
z-index: 0;
overflow: hidden;
`;

export { GarlandContainer };

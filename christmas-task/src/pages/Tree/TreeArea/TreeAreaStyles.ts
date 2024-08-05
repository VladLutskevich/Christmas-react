import styled from 'styled-components';

const TreeContainer = styled.div`
display: flex;
justify-content: center;
align-items: flex-end;
background-size: cover;
background-position: center;
height: calc(100vh - 140px);
min-height: 750px;
width: 800px;
padding-bottom: 20px;
overflow: hidden;
z-index: 0;
position: relative;
`;

const MainTree = styled.img`
display: block;
width: 500px;
height: 714px;
`;

export { TreeContainer, MainTree };

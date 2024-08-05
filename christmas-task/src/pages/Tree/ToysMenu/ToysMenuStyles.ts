import styled from 'styled-components';

import { ResetButton } from '../../Toys/ToysStyles';

const ToysMenuContainer = styled.div`
height: calc(100vh - 140px);
min-height: 750px;
width: 400px;
`;

const ItemsForDragContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
align-items: flex-start;
align-content: flex-start;
gap: 10px;
width: 100%;
padding-top: 25px;
padding-left: 25px;
::before {
    content: "Игрушки";
    width: 100%;
    font-size: 20px;
    font-weight: 400;
    padding: 10px;
    padding-left: 0;
    text-transform: uppercase;
}
`;

const CardForDrag = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 25%;
max-width: 84px;
min-height: 84px;
border-radius: 10px;
background-color: rgba(255, 255, 255, .5);
`;

const CardForDragCount = styled.p`
z-index: 10;
align-self: flex-end;
width: 25px;
height: 25px;
line-height: 25px;
text-align: center;
padding: 0;
margin: 0;
margin-left: 60px;
border-radius: 10px;
background-color: #24C5DB;
font-size: 14px;
font-weight: 900;
`;

const CardForDragImg = styled.img`
display: block;
position: absolute;
height: 60px;
width: 60px;
object-fit: contain;
cursor: move;
`;

const TreeResetButton = styled(ResetButton)`
margin: 60px;
`;

export {
  ToysMenuContainer, ItemsForDragContainer, CardForDrag, CardForDragCount, CardForDragImg, TreeResetButton,
};

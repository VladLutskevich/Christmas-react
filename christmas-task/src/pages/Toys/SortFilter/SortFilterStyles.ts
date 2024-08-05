import styled from 'styled-components';

const SortSelect = styled.select`
appearance: none;
border: 0;
outline: 0;
font: inherit;
width: 380px;
height: 40px;
padding: 5px 25px;
margin: 10px 0;
margin-bottom: 125px;
background-color: rgba(31, 112, 127, .3);
background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='50' fill='%238C98F2'><polygon points='0,0 100,0 50,50'/></svg>");
background-size: 15px;
background-repeat: no-repeat;
background-position: 340px center;
backdrop-filter: blur(6px);
border-radius: 20px;
border: 1px solid #278D9F;
font-size: 20px;
line-height: 28px;
color: #fff;
cursor: pointer;
`;

const SortOption = styled.option`
color: inherit;
background-color: #183E42;
`;

export { SortSelect, SortOption };

import styled from 'styled-components';

import { ColorButtons } from '../ColorFilters/ColorFiltersStyles';

const FavotiteButton = styled(ColorButtons)`
background-color: transparent !important;
backdrop-filter: blur(6px);
border: 1px solid #278D9F;
&:hover {
  background-color: #278D9F !important;
}
`;

const FavotiteButtonActive = styled(FavotiteButton)`
::after {
  content: '';
  display: block;
  position: absolute;
  top: 5px;
  left: 9px;
  width: 6px;
  height: 10px;
  border: solid #fff;
  border-width: 0 4px 4px 0;
  transform: rotate(45deg);
}
`;

export { FavotiteButton, FavotiteButtonActive };

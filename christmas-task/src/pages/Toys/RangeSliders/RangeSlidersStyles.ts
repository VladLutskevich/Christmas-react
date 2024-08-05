import styled from 'styled-components';

import { FilterPart } from '../ToysStyles';

const Range = styled(FilterPart)`
width: 540px;
`;

const SliderContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;

const CustomOutput = styled.output`
margin: 10px 0;
display: inline-flex;
justify-content: center;
align-items: center;
min-width: 80px;
height: 40px;
backdrop-filter: blur(6px);
border-radius: 20px;
border: 1px solid #278D9F;
`;

const CustomSlider = styled.div`
display: inline-block;
height: 6px;
width: 270px;
`;

export {
  Range, SliderContainer, CustomOutput, CustomSlider,
};

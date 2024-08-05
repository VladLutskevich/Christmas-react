import React from 'react';
import { useSelector } from 'react-redux';

import { GARLANDLINESCOUNT } from '../../../../common/Constants';
import { IState } from '../../../../common/Types';
import { GarlandContainer } from './GarlandStyles';
import './GarlandStylesCss.css';

const Garland = function () {
  const { generalMenuOptions } = useSelector((state: { mainReducer: IState }) => state.mainReducer);

  const garlandLines = new Array<string>(GARLANDLINESCOUNT).fill('lightrope');

  return (
    <GarlandContainer>
      {generalMenuOptions.isGarlandOn ? garlandLines.map((ul, i) => (
        <ul className={ul} style={{ width: `${120 + i * 65}px`, height: `${120 + i * 65}px` }}>
          { Array(2 * i + 5).fill(`light ${generalMenuOptions.garlandOptionSelected}`).map((li, j) => <li className={li} style={{ transform: `rotate(${60 + (60 / (2 * i + 5)) * j}deg) translate(${60 + 25 * i}px) rotate(-${60 + (60 / (2 * i + 5)) * j}deg)` }} />) }
        </ul>
      )) : <div />}
    </GarlandContainer>
  );
};

export default Garland;

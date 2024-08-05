import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  changeBg, changeGarlandColor, changeTree, toggleGarland, toggleSnow,
} from '../../../redux/main/actions';
import { BGSFORSELECT, TREESFORSELECT } from '../../../common/Constants';
import {
  GeneralMenuContainer, MenuContainer, SnowControl, SelectTreeContainer, TreeItem, SelectBgContainer, BgItem, SelectGarlandContainer,
  GarlandOnOffContainer, ActiveGarlandOnOffButton, GarlandOnOffButton, GarlandButtonsContainer, MulticolorButton, RedButton, BlueButton, YellowButton, GreenButton,
} from './GeneralMenuStyles';
import AudioControl from './AudioControl/AudioControl';
import { IState } from '../../../common/Types';

const GeneralMenu = function () {
  const dispatch = useDispatch();
  const { generalMenuOptions } = useSelector((state: { mainReducer: IState }) => state.mainReducer);

  const selectTreeCard = new Array<number>(TREESFORSELECT).fill(0);

  const selectBgCard = new Array<number>(BGSFORSELECT).fill(0);

  return (
    <GeneralMenuContainer>
      <MenuContainer>
        <AudioControl />
        <SnowControl onClick={() => {
          dispatch(toggleSnow('toggleSnow'));
        }}
        />
      </MenuContainer>
      <SelectTreeContainer>
        {selectTreeCard.map((elem, i) => (
          <TreeItem
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/tree/${i + 1}.png)` }}
            onClick={() => {
              dispatch(changeTree((i + 1).toString()));
            }}
          />
        ))}
      </SelectTreeContainer>
      <SelectBgContainer>
        {selectBgCard.map((elem, i) => (
          <BgItem
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/bg/${i + 1}.jpg)` }}
            onClick={() => {
              dispatch(changeBg((i + 1).toString()));
            }}
          />
        ))}
      </SelectBgContainer>
      <SelectGarlandContainer>
        <GarlandOnOffContainer>
          Вкл./Выкл.:
          {generalMenuOptions.isGarlandOn ? <ActiveGarlandOnOffButton onClick={() => dispatch(toggleGarland('toggleGarland'))} /> : <GarlandOnOffButton onClick={() => dispatch(toggleGarland('toggleGarland'))} />}
        </GarlandOnOffContainer>
        <GarlandButtonsContainer>
          <MulticolorButton onClick={() => dispatch(changeGarlandColor('multicolor'))} />
          <RedButton onClick={() => dispatch(changeGarlandColor('red'))} />
          <BlueButton onClick={() => dispatch(changeGarlandColor('blue'))} />
          <YellowButton onClick={() => dispatch(changeGarlandColor('yellow'))} />
          <GreenButton onClick={() => dispatch(changeGarlandColor('green'))} />
        </GarlandButtonsContainer>
      </SelectGarlandContainer>
    </GeneralMenuContainer>
  );
};

export default GeneralMenu;

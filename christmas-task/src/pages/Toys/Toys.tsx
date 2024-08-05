import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'nouislider-react/node_modules/nouislider/distribute/nouislider.css';

import {
  overlayToggle, resetFilter, resetLocalstorage,
} from '../../redux/main/actions';
import { CustomPage, Blur } from '../../common/custom-styled-components/CustomPage';
import CardContainer from './CardContainer/CardContainer';
import { IState } from '../../common/Types';
import {
  BigTitle, Controls, FilterPart, ResetButton, Overlay, Popup, CloseButton,
} from './ToysStyles';
import ShapeFilters from './ShapeFilters/ShapeFilters';
import ColorFilters from './ColorFilters/ColorFilters';
import SizeFilters from './SizeFilters/SizeFilters';
import FavoriteFilters from './FavoriteFilters/FavoriteFilters';
import SortFilter from './SortFilter/SortFilter';
import RangeSliders from './RangeSliders/RangeSliders';

const Toys = function () {
  const dispatch = useDispatch();
  const { isExtraToysPopupActive } = useSelector((state: { mainReducer: IState }) => state.mainReducer);

  return (
    <CustomPage>
      <Blur>
        <Controls>
          <FilterPart>
            <BigTitle>Фильтры по значению</BigTitle>
            <ShapeFilters />
            <ColorFilters />
            <SizeFilters />
            <FavoriteFilters />
          </FilterPart>
          <RangeSliders />
          <FilterPart>
            <SortFilter />
            <ResetButton onClick={() => dispatch(resetFilter('reset'))}>Сброс фильтров</ResetButton>
            <ResetButton onClick={() => dispatch(resetLocalstorage('resetLocalstorage'))}>Сброс Localstorage</ResetButton>
          </FilterPart>
        </Controls>
        <CardContainer />
      </Blur>
      {isExtraToysPopupActive
        && (
          <Overlay onClick={() => dispatch(overlayToggle('overlay'))}>
            <Popup>
              <p>Извините, все слоты заполнены</p>
              <CloseButton>Закрыть окно</CloseButton>
            </Popup>
          </Overlay>
        )}
    </CustomPage>
  );
};

export default Toys;

import { useDispatch, useSelector } from 'react-redux';

import { colorFilter } from '../../../redux/main/actions';
import { IState } from '../../../common/Types';
import { Parameters } from '../ToysStyles';
import { ColorButtons, ColorButtonsActive } from './ColorFiltersStyles';

const ColorFilters = function () {
  const dispatch = useDispatch();
  const { filters } = useSelector((state: { mainReducer: IState }) => state.mainReducer);
  const toyColors = ['white', 'yellow', 'red', 'blue', 'green'];

  return (
    <Parameters>
      Цвет:
      {toyColors.map((toyColor) => (filters.colors[toyColor as keyof typeof filters.colors] ? <ColorButtonsActive onClick={() => dispatch(colorFilter(toyColor))} /> : <ColorButtons onClick={() => dispatch(colorFilter(toyColor))} />))}
    </Parameters>
  );
};

export default ColorFilters;

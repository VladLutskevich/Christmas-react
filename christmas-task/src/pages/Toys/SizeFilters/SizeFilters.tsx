import { useDispatch, useSelector } from 'react-redux';

import { sizeFilter } from '../../../redux/main/actions';
import { IState } from '../../../common/Types';
import { Parameters } from '../ToysStyles';
import { SizeButtonActive, SizeButtons } from './SizeFiltersStyles';

const SizeFilters = function () {
  const dispatch = useDispatch();
  const { filters } = useSelector((state: { mainReducer: IState }) => state.mainReducer);
  const toySizes = ['big', 'normal', 'small'];

  return (
    <Parameters>
      Размер:
      {toySizes.map((toySize) => (filters.size[toySize as keyof typeof filters.size] ? <SizeButtonActive onClick={() => dispatch(sizeFilter(toySize))} /> : <SizeButtons onClick={() => dispatch(sizeFilter(toySize))} />))}
    </Parameters>
  );
};

export default SizeFilters;

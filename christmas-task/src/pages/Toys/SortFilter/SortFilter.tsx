import { useDispatch, useSelector } from 'react-redux';

import { optionsFilter } from '../../../redux/main/actions';
import { IState } from '../../../common/Types';
import { BigTitle } from '../ToysStyles';
import { SortOption, SortSelect } from './SortFilterStyles';

const SortFilter = function () {
  const dispatch = useDispatch();
  const { filters } = useSelector((state: { mainReducer: IState }) => state.mainReducer);

  return (
    <>
      <BigTitle>Сортировка</BigTitle>
      <SortSelect value={filters.sortOptionSelected} onChange={(e) => dispatch(optionsFilter(e.target.value))}>
        <SortOption value="1">По названию от «А» до «Я»</SortOption>
        <SortOption value="2">По названию от «Я» до «А»</SortOption>
        <SortOption value="3">По количеству по возрастанию</SortOption>
        <SortOption value="4">По количеству по убыванию</SortOption>
      </SortSelect>
    </>
  );
};

export default SortFilter;

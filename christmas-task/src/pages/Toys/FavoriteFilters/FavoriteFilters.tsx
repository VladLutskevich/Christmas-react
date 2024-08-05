import { useDispatch, useSelector } from 'react-redux';

import { favoriteFilter } from '../../../redux/main/actions';
import { IState } from '../../../common/Types';
import { Parameters } from '../ToysStyles';
import { FavotiteButton, FavotiteButtonActive } from './FavoriteFiltersStyles';

const FavoriteFilters = function () {
  const dispatch = useDispatch();
  const { filters } = useSelector((state: { mainReducer: IState }) => state.mainReducer);

  return (
    <Parameters>
      Только любимые:
      {filters.isFavorite ? <FavotiteButtonActive onClick={() => dispatch(favoriteFilter('isFavorite'))} /> : <FavotiteButton onClick={() => dispatch(favoriteFilter('isFavorite'))} />}
    </Parameters>
  );
};

export default FavoriteFilters;

import { useDispatch, useSelector } from 'react-redux';

import { shapeFilter } from '../../../redux/main/actions';
import { IState } from '../../../common/Types';
import { Parameters } from '../ToysStyles';
import { ShapeButtons, ShapeButtonsActive } from './ShapeFiltersStyles';

const ShapeFilters = function () {
  const dispatch = useDispatch();
  const { filters } = useSelector((state: { mainReducer: IState }) => state.mainReducer);
  const toyShapes = ['ball', 'bell', 'cone', 'snowflake', 'toy'];

  return (
    <Parameters>
      Форма:
      {toyShapes.map((toyShape) => (filters.shape[toyShape as keyof typeof filters.shape] ? <ShapeButtonsActive onClick={() => dispatch(shapeFilter(toyShape))} /> : <ShapeButtons onClick={() => dispatch(shapeFilter(toyShape))} />))}
    </Parameters>
  );
};

export default ShapeFilters;

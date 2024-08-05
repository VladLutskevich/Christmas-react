import Nouislider from 'nouislider-react';
import { useDispatch, useSelector } from 'react-redux';

import { amountFilter, yearFilter } from '../../../redux/main/actions';
import { IState } from '../../../common/Types';
import { BigTitle } from '../ToysStyles';
import {
  CustomOutput, CustomSlider, SliderContainer, Range,
} from './RangeSlidersStyles';
import {
  MAXAMOUNT, MAXYEAR, MINAMOUNT, MINYEAR, RANGEAMOUNT, RANGEYAER,
} from '../../../common/Constants';

const RangeSliders = function () {
  const dispatch = useDispatch();
  const { filters } = useSelector((state: { mainReducer: IState }) => state.mainReducer);
  const sliders = [{
    type: 'amount', min: MINAMOUNT, max: MAXAMOUNT, range: RANGEAMOUNT, title: 'Количество экземпляров:', func: amountFilter, props: filters.amount,
  }, {
    type: 'year', min: MINYEAR, max: MAXYEAR, range: RANGEYAER, title: 'Год приобретения:', func: yearFilter, props: filters.year,
  }];

  return (
    <Range>
      <BigTitle>Фильтры по диапазону</BigTitle>
      {sliders.map((slider) => (
        <div>
          <span>{slider.title}</span>
          <SliderContainer>
            <CustomOutput>{slider.props.min}</CustomOutput>
            <CustomSlider>
              <Nouislider
                connect
                behaviour="tap"
                start={[slider.props.min, slider.props.max]}
                range={{
                  min: [slider.min, slider.range],
                  max: slider.max,
                }}
                onSlide={(e: string[]) => dispatch(slider.func(e))}
              />
            </CustomSlider>
            <CustomOutput>{slider.props.max}</CustomOutput>
          </SliderContainer>
        </div>
      ))}
    </Range>
  );
};

export default RangeSliders;

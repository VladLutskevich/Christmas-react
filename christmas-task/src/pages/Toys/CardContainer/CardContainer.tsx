import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toysData } from '../../../common/ToysData';
import { IState, Toy } from '../../../common/Types';
import { overlayToggle, selectedFilter } from '../../../redux/main/actions';
import { MAXSELECTED } from '../../../common/Constants';
import {
  CardDescription, CardDiv, CardImg, CardTitle, Container, NotSelectedDiv, SelectedDiv,
} from './CardContainerStyles';
import useFiltersSort from './FilterSortHook';

const CardContainer = function () {
  const dispatch = useDispatch();
  const { selectedItems } = useSelector((state: { mainReducer: IState }) => state.mainReducer);
  const filteredCards: Toy[] = useFiltersSort(toysData);

  return (
    <Container>
      {filteredCards.length > 0 ? filteredCards.map((card) => {
        const currentCardInfo = [{ title: 'Количество:', value: card.count }, { title: 'Год покупки:', value: card.year }, { title: 'Форма:', value: card.shape },
          { title: 'Цвет:', value: card.color }, { title: 'Размер:', value: card.size }, { title: 'Любимая:', value: card.favorite ? 'да' : 'нет' }];
        return (
          <CardDiv onClick={() => {
            const favoriteSum = selectedItems.filter(Boolean).length;
            if (favoriteSum < MAXSELECTED || selectedItems[Number(card.num) - 1]) { dispatch(selectedFilter((Number(card.num) - 1).toString())); } else { dispatch(overlayToggle('overlay')); }
          }}
          >
            <CardTitle>{card.name}</CardTitle>
            <CardImg src={`${process.env.PUBLIC_URL}/assets/toys/${Number(card.num)}.png`} alt={card.name} />
            <CardDescription>
              {currentCardInfo.map((elem) => (
                <p>
                  {elem.title}
                  <span>
                    {' '}
                    {elem.value}
                  </span>
                </p>
              ))}
            </CardDescription>
            {selectedItems[Number(card.num) - 1] ? <SelectedDiv /> : <NotSelectedDiv />}
          </CardDiv>
        );
      }) : <h3>Извините, совпадений не обнаружено</h3>}

    </Container>
  );
};

export default CardContainer;

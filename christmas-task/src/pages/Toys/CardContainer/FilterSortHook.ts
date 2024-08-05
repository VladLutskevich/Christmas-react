import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  BALLSTRING, BELLSTRING, BIGSTRING, BLUESTRING, CONESTRING, GREENSTRING, NORMALSTRING, REDSTRING, SMALLSTRING, SNOWFLAKESTRING, TOYSTRING, WHITESTRING, YELLOWSTRING,
} from '../../../common/Constants';
import { IState, Toy } from '../../../common/Types';

function useFiltersSort(toysData: Toy[]) {
  const { filters } = useSelector((state: { mainReducer: IState }) => state.mainReducer);
  const [filteredCards, setCards] = useState(toysData);

  let newCards: Toy[] = toysData;
  useEffect(() => {
    if (filters.shape.ball || filters.shape.bell || filters.shape.cone || filters.shape.snowflake || filters.shape.toy) {
      newCards = newCards.filter((card) => ((card.shape === BALLSTRING && filters.shape.ball)
          || (card.shape === BELLSTRING && filters.shape.bell)
          || (card.shape === CONESTRING && filters.shape.cone)
          || (card.shape === SNOWFLAKESTRING && filters.shape.snowflake)
          || (card.shape === TOYSTRING && filters.shape.toy)));
    }

    if (filters.colors.white || filters.colors.yellow || filters.colors.red || filters.colors.blue || filters.colors.green) {
      newCards = newCards.filter((card) => ((card.color === WHITESTRING && filters.colors.white)
          || (card.color === YELLOWSTRING && filters.colors.yellow)
          || (card.color === REDSTRING && filters.colors.red)
          || (card.color === BLUESTRING && filters.colors.blue)
          || (card.color === GREENSTRING && filters.colors.green)));
    }

    if (filters.size.big || filters.size.normal || filters.size.small) {
      newCards = newCards.filter((card) => ((card.size === BIGSTRING && filters.size.big)
          || (card.size === NORMALSTRING && filters.size.normal)
          || (card.size === SMALLSTRING && filters.size.small)));
    }

    if (filters.isFavorite) {
      newCards = newCards.filter((card) => card.favorite);
    }

    newCards = newCards.filter((card) => Number(card.count) >= filters.amount.min && Number(card.count) <= filters.amount.max);

    newCards = newCards.filter((card) => Number(card.year) >= filters.year.min && Number(card.year) <= filters.year.max);

    newCards = newCards.filter((card) => card.name.toLowerCase().indexOf(filters.search.toLowerCase()) !== -1);

    switch (filters.sortOptionSelected) {
      case '1':
        newCards.sort((a, b) => ((a.name > b.name) ? 1 : -1));
        break;
      case '2':
        newCards.sort((a, b) => ((b.name > a.name) ? 1 : -1));
        break;
      case '3':
        newCards.sort((a, b) => Number(a.count) - Number(b.count));
        break;
      case '4':
        newCards.sort((a, b) => Number(b.count) - Number(a.count));
        break;
      default:
        break;
    }

    console.log(newCards);
    setCards(newCards);
  }, [filters]);

  return filteredCards;
}

export default useFiltersSort;

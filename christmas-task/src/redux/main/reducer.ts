import { createReducer, PayloadAction } from '@reduxjs/toolkit';

import {
  MAXAMOUNT, MAXYEAR, MINAMOUNT, MINYEAR,
} from '../../common/Constants';
import { IState, TreeCard } from '../../common/Types';
import {
  CHANGE_AMOUNT, CHANGE_BG, CHANGE_COLOR, CHANGE_DRAGGED_ITEMS, CHANGE_FAVORITE, CHANGE_GARLAND_COLOR, CHANGE_ITEMS_FOR_DRAG, CHANGE_OPTION, CHANGE_SEARCH, CHANGE_SELECT, CHANGE_SHAPE, CHANGE_SIZE, CHANGE_TOYS_ON_TREE, CHANGE_TREE, CHANGE_YEAR, RESET, RESET_LOCALSTORAGE, TOGGLE_AUDIO, TOGGLE_GARLAND, TOGGLE_POPUP, TOGGLE_SNOW,
} from './actions';

export const defaultState = {
  filters: {
    shape: {
      ball: false,
      bell: false,
      cone: false,
      snowflake: false,
      toy: false,
    },
    colors: {
      white: false,
      yellow: false,
      red: false,
      blue: false,
      green: false,
    },
    size: {
      big: false,
      normal: false,
      small: false,
    },
    isFavorite: false,
    amount: {
      min: MINAMOUNT,
      max: MAXAMOUNT,
    },
    year: {
      min: MINYEAR,
      max: MAXYEAR,
    },
    sortOptionSelected: '1',
    search: '',
  },
  isExtraToysPopupActive: false,
  selectedItems: new Array<boolean>(60).fill(false),
  generalMenuOptions: {
    isAudioOn: false,
    isSnowOn: false,
    treeOptionSelected: '1',
    bgOptionSelected: '1',
    isGarlandOn: false,
    garlandOptionSelected: 'multicolor',
  },
  itemsForDrag: [2, 5, 3, 2, 4, 6, 12, 10, 2, 7, 11, 5, 3, 4, 3, 3, 7, 2, 12, 8].concat(new Array<number>(40).fill(0)),
  draggedItems: new Array<number>(60).fill(0),
  toysOnTree: new Array<TreeCard>(0),
};

const mainReducer = createReducer(defaultState, {
  [CHANGE_SHAPE]: (state: IState, action: PayloadAction<string>) => {
    const shapeInfo = action.payload as keyof typeof state.filters.shape;
    state.filters.shape[shapeInfo] = !state.filters.shape[shapeInfo];
  },
  [CHANGE_COLOR]: (state: IState, action: PayloadAction<string>) => {
    const colorInfo = action.payload as keyof typeof state.filters.colors;
    state.filters.colors[colorInfo] = !state.filters.colors[colorInfo];
  },
  [CHANGE_SIZE]: (state: IState, action: PayloadAction<string>) => {
    const sizeInfo = action.payload as keyof typeof state.filters.size;
    state.filters.size[sizeInfo] = !state.filters.size[sizeInfo];
  },
  [CHANGE_FAVORITE]: (state: IState) => {
    state.filters.isFavorite = !state.filters.isFavorite;
  },
  [CHANGE_AMOUNT]: (state: IState, action: PayloadAction<string[]>) => {
    state.filters.amount.min = parseInt(action.payload[0]);
    state.filters.amount.max = parseInt(action.payload[1]);
  },
  [CHANGE_YEAR]: (state: IState, action: PayloadAction<string[]>) => {
    state.filters.year.min = parseInt(action.payload[0]);
    state.filters.year.max = parseInt(action.payload[1]);
  },
  [CHANGE_OPTION]: (state: IState, action: PayloadAction<string>) => {
    state.filters.sortOptionSelected = action.payload;
  },
  [RESET]: (state: IState) => {
    state.filters = defaultState.filters;
  },
  [RESET_LOCALSTORAGE]: () => defaultState,
  [CHANGE_SEARCH]: (state: IState, action: PayloadAction<string>) => {
    state.filters.search = action.payload;
  },
  [CHANGE_SELECT]: (state: IState, action: PayloadAction<string>) => {
    const select: string = action.payload;
    state.selectedItems[Number(select)] = !state.selectedItems[Number(select)];
  },
  [TOGGLE_POPUP]: (state: IState) => {
    state.isExtraToysPopupActive = !state.isExtraToysPopupActive;
  },
  [CHANGE_TREE]: (state: IState, action: PayloadAction<string>) => {
    state.generalMenuOptions.treeOptionSelected = action.payload;
  },
  [CHANGE_BG]: (state: IState, action: PayloadAction<string>) => {
    state.generalMenuOptions.bgOptionSelected = action.payload;
  },
  [TOGGLE_GARLAND]: (state: IState) => {
    state.generalMenuOptions.isGarlandOn = !state.generalMenuOptions.isGarlandOn;
  },
  [CHANGE_GARLAND_COLOR]: (state: IState, action: PayloadAction<string>) => {
    state.generalMenuOptions.garlandOptionSelected = action.payload;
  },
  [TOGGLE_AUDIO]: (state: IState) => {
    state.generalMenuOptions.isAudioOn = !state.generalMenuOptions.isAudioOn;
  },
  [TOGGLE_SNOW]: (state: IState) => {
    state.generalMenuOptions.isSnowOn = !state.generalMenuOptions.isSnowOn;
  },
  [CHANGE_ITEMS_FOR_DRAG]: (state: IState, action: PayloadAction<number[]>) => {
    state.itemsForDrag = action.payload;
  },
  [CHANGE_DRAGGED_ITEMS]: (state: IState, action: PayloadAction<number[]>) => {
    state.draggedItems = action.payload;
  },
  [CHANGE_TOYS_ON_TREE]: (state: IState, action: PayloadAction<TreeCard[]>) => {
    state.toysOnTree = action.payload;
  },
});

export default mainReducer;

import { createStore } from '@reduxjs/toolkit';

import { IState } from '../common/Types';
import rootReducer from './index';

const tmp = localStorage.getItem('reduxState');
const persistedState: { mainReducer: IState } = tmp !== null ? JSON.parse(tmp) : {};
console.log(persistedState);

const store = createStore(
  rootReducer,
  persistedState,
);

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;

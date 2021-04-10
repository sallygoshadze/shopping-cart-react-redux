import { createStore } from 'redux';
import reducer from './reducer';
import data from '../data';

export const initialStore = {
  cart: data,
  total: 110,
  amount: 5,
};

export const store = createStore(reducer, initialStore);

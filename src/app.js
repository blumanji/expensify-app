// 3rd party library imports
// install - import - use

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({description: 'water bill', amount: 6579, createdAt: 'some point' }));
store.dispatch(addExpense({description: 'gas bill', amount: 600, createdAt: 'monday'}));
store.dispatch(setTextFilter('water'));

setTimeout(() => {
  store.dispatch(setTextFilter('bill'));
}, 3000)

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

// addExpense - Water bill
// addExpense - Gas bill
// setTextFilter - bill (2 items) - water (1 item)
// getVisibleExpenses - print visible ones to screen

console.log(store.getState())

const jsx = (
  <Provider store={store}>
  <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
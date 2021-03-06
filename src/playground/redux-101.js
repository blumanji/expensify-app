import { createStore } from 'redux';

//Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ( { count } = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
  type: 'RESET',
});

// Reducers
// 1. Reducers are pure function 
// - stateless, returns output given an input
// - functions DO NOT use/change/access outside info
// 2. Never change state or action, NO MUTATE STATE


const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
    return {
      count: state.count + action.incrementBy
    };
    case 'DECREMENT':
    return {
      count: state.count - action.decrementBy
    };
    case 'SET':
    return {
      count: action.count
    };
    case 'RESET':
    return {
      count: 0
    };
    default:
    return state;
  }

};

const store = createStore(countReducer);
// Actions - an object that gets sent to the store

//dispatch actions to createStore switch handler
const unsubscribe = store.subscribe( () => {
  console.log(store.getState());
});

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));
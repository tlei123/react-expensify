import { createStore } from 'redux';

// Redux action-generators avoid having to retype action type elsewhere.
const incrementCount = ({ by = 1 } = {}) => ({
  type: 'INCREMENT',
  by
});

const decrementCount = ({ by = 1} = {}) => ({
  type: 'DECREMENT',
  by
});

const setCount = ( { to = 0 } = {} ) => ({
  type: 'SET',
  to
});

const resetCount = () => ({ type: 'RESET' });

// Reducers take a group of actions and modify the store accordingly.
// Reducers are PURE FUNCTIONS.
// Reducers do NOT directly change the store (state).
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.by
      };
    case 'DECREMENT':
      return {
        count: state.count - action.by
      };
      case 'SET':
        return {
          count: action.to
        };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
};

// Redux store and reducers.
const store = createStore(countReducer);
console.log('Redux initial state:', store.getState());

// subscribe returns a function for unsubscrbing.
const unsubscribe = store.subscribe(() => {
  console.log('Redux state:', store.getState());
});

store.dispatch(incrementCount({ by: 5 }));
store.dispatch(incrementCount());

// Decrement the count.
store.dispatch(decrementCount({ by: 2 }));
store.dispatch(decrementCount());

// Reset the count to 0.
store.dispatch(resetCount());

// Set the count to 100.
store.dispatch(setCount({ to: 100 }));

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/authReducer';
import expensesReducer from '../reducers/expensesReducer';
import filtersReducer from '../reducers/filtersReducer';
import messageReducer from '../reducers/messageReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      expenses: expensesReducer,
      filters: filtersReducer,
      message: messageReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};

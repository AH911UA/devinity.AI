import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(/* Add middleware if needed */));
};

export default configureStore;

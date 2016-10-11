import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

export default (initialState) => createStore(
  reducer, // () => {} 
  initialState,
  compose(
    applyMiddleware(thunk),
    typeof window !== 'undefined' && window.devToolsExtension
      ? window.devToolsExtension()
      : (f) => f
  )
);


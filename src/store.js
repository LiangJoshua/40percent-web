import { createStore, applyMiddleware } from 'redux';
import { connectRouter } from 'connected-react-router';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { history } from './history';
import rootReducer from './reducers';

const initialState = {};
// const enhancers = [];
// const middleware = [thunk, routerMiddleware(history)];
const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(
    connectRouter(history)(rootReducer),
    composedEnhancer
);

export default store;

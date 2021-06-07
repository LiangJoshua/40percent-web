import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { history } from '../history';

import user from './user';

const rootReducer = combineReducers({
    user,
    router: connectRouter(history),
});

export default rootReducer;

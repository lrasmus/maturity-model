import { combineReducers } from 'redux';
import { login } from './login';
import { models } from './model';
import { user } from './user';
import { general } from './general';
import { appConfig } from './appConfig';

const rootReducer = combineReducers({
    general,
    login,
    models,
    user,
    appConfig
});

export default rootReducer;

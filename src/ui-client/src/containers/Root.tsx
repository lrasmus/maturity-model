import React from 'react';
import { Provider } from 'react-redux';
import { AppState } from '../model/AppState';
import { defaultLoginState } from '../reducers/login';
import configureStore from '../store/configureStore';
import { defaultUserState } from '../reducers/user';
import { defaultModelState } from '../reducers/model';
import { defaultGeneralState } from '../reducers/general';
import { defaultAppConfigState } from '../reducers/appConfig';
import App from './App';

const beginState: AppState = {
    general: defaultGeneralState(),
    login: defaultLoginState(),
    user: defaultUserState(),
    models: defaultModelState(),
    appConfig: defaultAppConfigState()
}

const store = configureStore(beginState);

export default class Root extends React.Component {
    public render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}
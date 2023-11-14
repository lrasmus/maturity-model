import React from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { AppState } from '../model/AppState';
import { Login } from './Login/Login';
import Main from './Main/Main';
import { UserState } from '../model/UserState';
import { ModelsState } from '../model/ModelsState';
import { LoginState } from '../model/LoginState';
import { GeneralState } from '../model/GeneralState';
import { AppConfigState, AppConfigLoadState } from '../model/AppConfigState';
import { getAppConfig } from '../actions/appConfig';

interface OwnProps {

}
interface DispatchProps {
    dispatch: any;
}
interface StateProps {
    general: GeneralState;
    login: LoginState;
    models: ModelsState;
    user: UserState;
    appConfig: AppConfigState;
}

type Props = StateProps & DispatchProps & OwnProps;

class App extends React.PureComponent<Props> {
    // Credit to https://stackoverflow.com/a/55748279 for the solution
    // on setting CSRF token on app launch.
    componentDidMount() {
        // Send get request to get CSRF token once site is visited.
        Axios.get('/api/csrf')
          .then(res => {
             // Set it in header for the rest of the axios requests.
            Axios.defaults.headers.post['X-CSRFToken'] = res.headers['x-csrftoken'];
          })
      }

    public render() {
        const { dispatch, general, login, models, user, appConfig } = this.props;

        if (appConfig && appConfig.loadState === AppConfigLoadState.NotLoaded) {
            dispatch(getAppConfig());
        }

        /*
         * Show login if not logged in yet.
         */
        if (!login.loggedIn) {
            return <Login dispatch={dispatch} generalState={general} loginState={login} appConfigState={appConfig} />;
        }
        /*
         * Else show the main screen.
         */
        return <Main dispatch={dispatch} general={general} login={login} models={models} user={user} />
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        general: state.general,
        login: state.login,
        models: state.models,
        user: state.user,
        appConfig: state.appConfig
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        dispatch
    };
};

export default connect<StateProps, DispatchProps, OwnProps, AppState>
    (mapStateToProps, mapDispatchToProps)(App);

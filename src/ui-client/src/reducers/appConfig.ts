import { 
    AppConfigAction, 
    APP_CONFIG_LOADED,
    APP_SET_CONFIG
} from "../actions/appConfig"
import { AppConfigState, AppConfigLoadState } from "../model/AppConfigState"

export const defaultAppConfigState = (): AppConfigState => {
    return {
        admin: '',
        allowSignup: false,
        allowGuest: false,
        loadState: AppConfigLoadState.NotLoaded
    }
}

export const appConfig = (state: AppConfigState = defaultAppConfigState(), action: AppConfigAction): AppConfigState => {
    switch (action.type) {
        case APP_SET_CONFIG:
            return Object.assign({}, state, { ...action.config, loadState: AppConfigLoadState.Loaded });
        case APP_CONFIG_LOADED:
            return Object.assign({}, state, { loadState: action.loadState });
    }
    return state;
}
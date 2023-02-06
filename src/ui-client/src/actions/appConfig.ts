import { getApplicationConfig } from "../services/api";
import { AppState } from '../model/AppState';
import { AppConfigState, AppConfigLoadState } from '../model/AppConfigState';

export const APP_CONFIG_LOADED = 'APP_CONFIG_LOADED';
export const APP_SET_CONFIG = 'APP_SET_CONFIG';

export interface AppConfigAction {
    config?: AppConfigState;
    loadState?: AppConfigLoadState;
    type: string;
}

export const getAppConfig = ()=> {
    return async (dispatch: any, getState: () => AppState) => {
        const { user } = getState();
        try {
            dispatch(appSetStartupLoadState(AppConfigLoadState.Loading));
            const config = await getApplicationConfig();

            /* 
             * Update store.
             */
            dispatch(appSetConfig(config));
            dispatch(appSetStartupLoadState(AppConfigLoadState.Loaded));
        } catch (err) {
            console.log(err);
            dispatch(appSetStartupLoadState(AppConfigLoadState.Failed));
        }
    };
};

export const appSetStartupLoadState = (loadState: AppConfigLoadState): AppConfigAction => {
    return {
        loadState,
        type: APP_CONFIG_LOADED
    };
};

export const appSetConfig = (config: AppConfigState): AppConfigAction => {
    return {
        config,
        type: APP_SET_CONFIG
    };
};
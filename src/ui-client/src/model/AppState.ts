import { LoginState } from './LoginState'
import { ModelsState } from './ModelsState';
import { UserState } from './UserState';
import { GeneralState } from './GeneralState';
import { AppConfigState } from './AppConfigState';

export interface AppState {
    general: GeneralState;
    login: LoginState;
    models: ModelsState;
    user: UserState;
    appConfig: AppConfigState;
}
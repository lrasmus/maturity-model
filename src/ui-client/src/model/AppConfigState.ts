export enum AppConfigLoadState {
    NotLoaded = 1,
    Loading = 2,
    Loaded = 3,
    Failed = 4
}

export interface AppConfigState {
    admin: string;
    allowSignup: boolean;
    allowGuest: boolean;
    loadState: AppConfigLoadState;
}

// #4)

import { ActionReducerMap } from '@ngrx/store';
import { userReducer } from './user/user.reducer';
import { darkModeReducer } from './darkmode/darkmode.reducer';

export const reducerKeys = [
    'user',
    'dark'
    // Incluir darkmode como reducer key
];

export interface AppState {
    user: any;
    dark: any;
    // Incluir darkmode da any

}

export const reducers: ActionReducerMap<AppState> = {
    user: userReducer,
    dark: darkModeReducer,
    // Incluir darkmode reducer
};

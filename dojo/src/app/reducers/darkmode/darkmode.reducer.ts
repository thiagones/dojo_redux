// #3)

// Importar DarkModeActionTypes
import { DarkModeActionTypes } from '../../action/darkmode/darkmode.actions';
import { DarkModeState } from 'src/app/state/darkmode/darkmode.state';
import { ActionModel } from 'src/app/state/action/action.model';
import { AppState } from '../app-state';
import { Store, select } from '@ngrx/store';

// Criar initialState
export const initialState = new DarkModeState(false);

// Criar Reducer para resolver os ActionTypes
export function darkModeReducer(state = initialState, action: ActionModel) {
    switch(action.type){
        case DarkModeActionTypes.DarkModeToggle: {
            const newState = new DarkModeState(!action.payload.dark);
            return Object.assign({}, state, newState);
        }

        default:
            return state;
    }

}

// Criar selector do state na store
export const selectDarkMode = (store: Store<AppState>) => {
    let darkState: DarkModeState;

    store.pipe(select('dark'))
    .subscribe((x) => {
        darkState = x;
      })
      .unsubscribe();

    return darkState;
}

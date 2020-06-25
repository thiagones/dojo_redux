import { UserActionTypes, ClearUserState } from '../../action/user/user.actions';
import { ActionModel } from '../../state/action/action.model';
import { UserState } from 'src/app/state/user/user.state';
import { AppState } from '../app-state';
import { Store, select } from '@ngrx/store';

export const initialState = new UserState('', '');

export function userReducer(state = initialState, action: ActionModel) {
  switch (action.type) {
    case UserActionTypes.UpdateUser: {
      if (!action.payload) {
        return state;
      }

      const user = action.payload.user;
      const token = generateToken(action.payload.password);

      const newState = new UserState(user, token);

      return Object.assign({}, state, newState);
    }

    case UserActionTypes.ClearUserState: {
      return Object.assign({}, state, initialState);
    }

    default:
      return state;
  }
}

export const selectUser = (store: Store<AppState>) => {
  let userState: UserState;

  store
    .pipe(select('user'))
    .subscribe((x) => {
      userState = x;
    })
    .unsubscribe();

  return userState;
};

export const clearUser = (store: Store<AppState>) => {
  store.dispatch(ClearUserState(undefined));
};

function generateToken(password: string) {
  
  
  password = password.replace(/0/g, '_zero');
  password = password.replace(/1/g, '_um');
  password = password.replace(/2/g, '_dois');
  password = password.replace(/3/g, '_tres');
  password = password.replace(/4/g, '_quatro');
  password = password.replace(/5/g, '_cinco');
  password = password.replace(/6/g, '_seis');
  password = password.replace(/7/g, '_sete');
  password = password.replace(/8/g, '_oito');
  password = password.replace(/9/g, '_nove');

  password = password.replace(/a/g, '4');
  password = password.replace(/e/g, '3');
  password = password.replace(/i/g, '1');
  password = password.replace(/o/g, '0');
  password = password.replace(/t/g, '7');

  return password;
}

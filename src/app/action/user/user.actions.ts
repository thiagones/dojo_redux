import { ActionModel } from 'src/app/state/action/action.model';

export enum UserActionTypes {
  UpdateUser = 'UPDATE_USER',
  ClearUserState = 'CLEAR_USER_STATE',
}

export const UpdateUser = (data: any) => {
  return { type: UserActionTypes.UpdateUser, payload: data } as ActionModel;
};

export const ClearUserState = (data: any) => {
  return { type: UserActionTypes.ClearUserState, payload: data } as ActionModel;
};

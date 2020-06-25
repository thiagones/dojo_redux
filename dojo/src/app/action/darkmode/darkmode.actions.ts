// #1) 

// Importar ActionModel
import {ActionModel} from 'src/app/state/action/action.model';

// Criar enum type DarkModeToggleTypes
export enum DarkModeActionTypes {
  DarkModeToggle = 'DARK_MODEL_TOGGLE',
}

// Criar Action ActionModel DarkModeToggle
export const DarkModeToggle = (data: any) => {
  return {type: DarkModeActionTypes.DarkModeToggle, payload: data} as ActionModel;
};

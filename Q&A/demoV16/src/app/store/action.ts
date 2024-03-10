import { createAction, props } from '@ngrx/store';
import { MainState } from '.';

const actionType = {
  increment: 'INCREMENT',
  setValue: 'SET_VALUE',
};

export const increment = createAction(actionType.increment);
export const setValue = createAction(actionType.setValue, props<MainState>());

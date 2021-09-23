import {createAction} from '@ngrx/store';

const prefix = (action: string) => {
  return 'UserState: ' + action;
};

export const getUserData = createAction(prefix('Get User Data'));

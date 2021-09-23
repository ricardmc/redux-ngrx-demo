import {CurrencyEnum, IDemoState, IUser, LanguageEnum} from "../../app.domain";
import {getUserData} from "./user.actions";
import {createReducer, on} from '@ngrx/store';

export const initialState: IUser = {
  id: 0,
  name: '',
  language: LanguageEnum.ENGLISH,
  currency: CurrencyEnum.EUR
};

export const userReducer = createReducer(
  initialState,
  on(getUserData, (state): IUser => {
    //Fake API
    const res = {
      id: 1,
      name: 'John Smith',
      language: LanguageEnum.CHINESE,
      currency: CurrencyEnum.EUR
    };
    return {
      ...state,
      id: res.id,
      name: res.name,
      language: res.language,
      currency: res.currency
    };
  })
)

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store';
import {userReducer} from '../user/state/user.reducer';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    StoreModule.forFeature({name: 'user', reducer: userReducer}),
  ],
})
export class CartModule { }

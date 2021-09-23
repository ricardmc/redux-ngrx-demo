import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { CartComponent } from './cart/cart.component';
import { MainComponent } from './main/main.component';
import { LanguagePipe } from './common/language.pipe';
import { CustomCurrencyPipe } from './common/customCurrency.pipe';
import { StoreModule } from '@ngrx/store';
import { UserComponent } from './user/user.component';
import { UserModule } from './user/user.module';
import {CartModule} from './cart/cart.module';
import {MainModule} from './main/main.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'cart',
    component: CartComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    MainComponent,
    LanguagePipe,
    CustomCurrencyPipe,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UserModule,
    CartModule,
    MainModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

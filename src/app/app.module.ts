import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { ProfileComponent } from './user/profile/profile.component';
import {UserRequestInterceptor} from "./user/user.request.interceptor";
import {AuthGuard} from "./user/auth.guard";
import { SharedModule } from './shared/components/shared.module';
import { MainPageComponent } from './main-page/main-page.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FooddeliveryComponent } from './fooddelivery/fooddelivery.component';
import { StoreComponent } from './fooddelivery/store/store.component';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { RestaurantsNearMeComponent } from './fooddelivery/restaurants-near-me/restaurants-near-me.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    ProfileComponent,
    MainPageComponent,
    FooddeliveryComponent,
    StoreComponent,
    RestaurantsNearMeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SharedModule.forRoot(),
    GooglePlaceModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserRequestInterceptor,
      multi: true
    },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    AuthGuard
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }

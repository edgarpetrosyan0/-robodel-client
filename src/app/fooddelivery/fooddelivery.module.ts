import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { RestaurantsNearMeComponent } from './restaurants-near-me/restaurants-near-me.component';
import { StoreComponent } from './store/store.component';
import { FooddeliveryListComponent } from './fooddelivery-list/fooddelivery-list.component';
import { FooddeliveryComponent } from './fooddelivery.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { FoodDeliveryDataService } from './services/fooddeliveryData.service';
import { SharedModule } from '../shared/components/shared.module';
import { FoodCategoriesComponent } from './fooddelivery-list/food-categories/food-categories.component';
import { FoodFiltersComponent } from './fooddelivery-list/food-filters/food-filters.component';

@NgModule({
    declarations: [
        FooddeliveryComponent,
        StoreComponent,
        RestaurantsNearMeComponent,
        FooddeliveryListComponent,
        FoodCategoriesComponent,
        FoodFiltersComponent

    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        BrowserModule,
        FormsModule,
        GooglePlaceModule,
        SharedModule.forRoot(),
    ],
    exports:[
        FooddeliveryComponent,
        StoreComponent,
        RestaurantsNearMeComponent,
        FooddeliveryListComponent
    ],

    providers: [
    FoodDeliveryDataService,
   ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class FoodDeliverModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: FoodDeliverModule
        };
    }
}

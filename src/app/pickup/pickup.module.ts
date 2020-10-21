import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { SharedModule } from '../shared/components/shared.module';
import { PickupDataService } from './services/pickupData.service';
import { PickupListComponent } from './pickup-list/pickup-list.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
    declarations: [

        PickupListComponent
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
         AgmCoreModule.forRoot({
      apiKey: ''
    })
    ],
    exports:[
        
        PickupListComponent
    ],

    providers: [
        PickupDataService,
  ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class PickupModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: PickupModule
        };
    }
}

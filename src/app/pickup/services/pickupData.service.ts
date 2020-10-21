import { Injectable } from '@angular/core';
// import { TeamWebHookService, WebHookClientReadModel, PaginatedItemsReadModelOfWebHookClientReadModel } from '../api';
import { Subject, Observable, BehaviorSubject } from 'rxjs';


const API_VERSION = '1.0';

@Injectable()
export class PickupDataService {

    // private arrwebhook: PaginatedItemsReadModelOfWebHookClientReadModel;
    // private webhooks$ = new Subject<PaginatedItemsReadModelOfWebHookClientReadModel>();
    // webhooks = this.webhooks$.asObservable();
    constructor(

    ) {
        
    }

    loadWebhook() {
        // this.webhookService1.apiVapiVersionTeamWebHookGetWebHookClientsByTeamGet(API_VERSION).subscribe((webhookModel) => {
        //     this.arrwebhook = webhookModel;
        //     this.webhooks$.next(this.arrwebhook);
        // }, err => { });
    }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants-near-me',
  templateUrl: './restaurants-near-me.component.html',
  styleUrls: ['./restaurants-near-me.component.scss']
})
export class RestaurantsNearMeComponent implements OnInit {

  constructor() { }
  restaurantsNearAll = [
    { foodName: 'Chicken Burrito', foodType: 'Burrito', city: 'New York City' , price: 100},
    { foodName: 'Steak Burrito', foodType: 'Burrito', city: 'New York City' , price: 100},
    { foodName: 'Carnitas Burrito', foodType: 'Burrito', city: 'New York City' , price: 100},
    { foodName: 'Barbacoa Burrito', foodType: 'Burrito', city: 'New York City' , price: 100},
    { foodName: 'Chorizo Burrito', foodType: 'Burrito', city: 'New York City' , price: 100},
    { foodName: 'Sofritas Burrito', foodType: 'Burrito', city: 'New York City' , price: 100},
   
  ];

  formattedaddress = ' ';
  options = {
    componentRestrictions: {
      country: ['AU']
    }
  };

  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });

  }
  public AddressChange(address: any) {
    debugger;
    this.formattedaddress = address.formatted_address;

  }

  opens() {
    document.getElementById('side-menu').classList.toggle('open');
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-food-filters',
  templateUrl: './food-filters.component.html',
  styleUrls: ['./food-filters.component.scss']
})
export class FoodFiltersComponent implements OnInit {

  constructor(
    private router: Router,
    private location: Location,
  ) { }

  restaurantsNearAll = [
    { foodName: 'Chicken Burrito', foodType: 'Burrito', city: 'New York City', price: 100 },
    { foodName: 'Steak Burrito', foodType: 'Burrito', city: 'New York City', price: 100 },
    { foodName: 'Carnitas Burrito', foodType: 'Burrito', city: 'New York City', price: 100 },
    { foodName: 'Barbacoa Burrito', foodType: 'Burrito', city: 'New York City', price: 100 },
    { foodName: 'Chorizo Burrito', foodType: 'Burrito', city: 'New York City', price: 100 },
    { foodName: 'Sofritas Burrito', foodType: 'Burrito', city: 'New York City', price: 100 },

  ];

  foods = [
    { foodname: 'Fast Food', url: '/assets/images/food1.svg' },
    { foodname: 'Chicken', url: '/assets/images/food2.svg' },
    { foodname: 'Burrito', url: '/assets/images/food3.svg' },
    { foodname: 'Burgers', url: '/assets/images/food4.svg' },
    { foodname: 'Burgers', url: '/assets/images/food1.svg' },
    { foodname: 'Burgers', url: '/assets/images/food2.svg' },
    { foodname: 'Burgers', url: '/assets/images/food3.svg' },

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
    this.formattedaddress = address.formatted_address;
  }

  opens() {
    document.getElementById('side-menu').classList.toggle('open');
  }

  back(){
    this.location.back();
  }
}

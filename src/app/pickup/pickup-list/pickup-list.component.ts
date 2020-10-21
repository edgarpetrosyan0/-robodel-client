import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pickup-list',
  templateUrl: './pickup-list.component.html',
  styleUrls: ['./pickup-list.component.scss']
})
export class PickupListComponent implements OnInit {
  lat = 51.678418;
  lng = 7.809007;
  addresbox: boolean;
  constructor(
    private router: Router
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

  foodStore() {
    this.router.navigate(['food-store']);
  }

  seeAll(){
    this.router.navigate(['food-categories']);
  }

  filters(){
    this.router.navigate(['food-filters']);
  }

  pickupPage(){
    this.router.navigate(['pickup-list']);
  }

  deliveryPage(){
    this.router.navigate(['food-delivery-list']);
  }
  
yourAddresBox() {
  this.addresbox = !this.addresbox
  }
}

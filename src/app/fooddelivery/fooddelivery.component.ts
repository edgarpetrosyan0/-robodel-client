import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fooddelivery',
  templateUrl: './fooddelivery.component.html',
  styleUrls: ['./fooddelivery.component.scss']
})
export class FooddeliveryComponent implements OnInit {

  constructor() { }
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

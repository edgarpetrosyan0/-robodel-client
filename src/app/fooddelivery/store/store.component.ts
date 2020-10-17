import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
addresbox: boolean;
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
  opens(){
    document.getElementById('side-menu').classList.toggle('open');
  }

  public AddressChange(address: any) {
    debugger;
    this.formattedaddress = address.formatted_address;
    
}

yourAddresBox() {
this.addresbox = !this.addresbox
}
}

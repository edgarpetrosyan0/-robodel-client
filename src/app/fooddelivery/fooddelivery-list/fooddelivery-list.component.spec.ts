import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooddeliveryListComponent } from './fooddelivery-list.component';

describe('FooddeliveryListComponent', () => {
  let component: FooddeliveryListComponent;
  let fixture: ComponentFixture<FooddeliveryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooddeliveryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooddeliveryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooddeliveryComponent } from './fooddelivery.component';

describe('FooddeliveryComponent', () => {
  let component: FooddeliveryComponent;
  let fixture: ComponentFixture<FooddeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooddeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooddeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsNearMeComponent } from './restaurants-near-me.component';

describe('RestaurantsNearMeComponent', () => {
  let component: RestaurantsNearMeComponent;
  let fixture: ComponentFixture<RestaurantsNearMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantsNearMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsNearMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

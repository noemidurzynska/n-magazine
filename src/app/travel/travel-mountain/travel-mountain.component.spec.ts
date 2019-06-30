import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelMountainComponent } from './travel-mountain.component';

describe('TravelMountainComponent', () => {
  let component: TravelMountainComponent;
  let fixture: ComponentFixture<TravelMountainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelMountainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelMountainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

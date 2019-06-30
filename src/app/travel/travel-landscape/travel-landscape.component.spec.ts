import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelLandscapeComponent } from './travel-landscape.component';

describe('TravelLandscapeComponent', () => {
  let component: TravelLandscapeComponent;
  let fixture: ComponentFixture<TravelLandscapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelLandscapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelLandscapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

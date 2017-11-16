import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeQuotesComponent } from './home-quotes.component';

describe('HomeQuotesComponent', () => {
  let component: HomeQuotesComponent;
  let fixture: ComponentFixture<HomeQuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeQuotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

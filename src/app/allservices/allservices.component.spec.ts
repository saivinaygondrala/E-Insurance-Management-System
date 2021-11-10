import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllservicesComponent } from './allservices.component';

describe('AllservicesComponent', () => {
  let component: AllservicesComponent;
  let fixture: ComponentFixture<AllservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

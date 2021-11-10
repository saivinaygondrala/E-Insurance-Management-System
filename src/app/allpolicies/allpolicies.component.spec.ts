import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpoliciesComponent } from './allpolicies.component';

describe('AllpoliciesComponent', () => {
  let component: AllpoliciesComponent;
  let fixture: ComponentFixture<AllpoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllpoliciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllpoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

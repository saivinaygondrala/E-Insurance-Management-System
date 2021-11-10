import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserselectedpoliciesComponent } from './userselectedpolicies.component';

describe('UserselectedpoliciesComponent', () => {
  let component: UserselectedpoliciesComponent;
  let fixture: ComponentFixture<UserselectedpoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserselectedpoliciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserselectedpoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

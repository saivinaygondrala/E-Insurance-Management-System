import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypoliciesComponent } from './mypolicies.component';

describe('MypoliciesComponent', () => {
  let component: MypoliciesComponent;
  let fixture: ComponentFixture<MypoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MypoliciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MypoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

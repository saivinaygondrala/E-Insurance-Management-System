import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpolicyComponent } from './editpolicy.component';

describe('EditpolicyComponent', () => {
  let component: EditpolicyComponent;
  let fixture: ComponentFixture<EditpolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UleftpanelComponent } from './uleftpanel.component';

describe('UleftpanelComponent', () => {
  let component: UleftpanelComponent;
  let fixture: ComponentFixture<UleftpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UleftpanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UleftpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

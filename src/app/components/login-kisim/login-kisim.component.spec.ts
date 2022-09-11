import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginKisimComponent } from './login-kisim.component';

describe('LoginKisimComponent', () => {
  let component: LoginKisimComponent;
  let fixture: ComponentFixture<LoginKisimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginKisimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginKisimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

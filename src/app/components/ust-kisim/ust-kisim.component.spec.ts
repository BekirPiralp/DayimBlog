import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UstKisimComponent } from './ust-kisim.component';

describe('UstKisimComponent', () => {
  let component: UstKisimComponent;
  let fixture: ComponentFixture<UstKisimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UstKisimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UstKisimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

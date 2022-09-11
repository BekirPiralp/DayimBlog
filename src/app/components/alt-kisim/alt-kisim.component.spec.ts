import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltKisimComponent } from './alt-kisim.component';

describe('AltKisimComponent', () => {
  let component: AltKisimComponent;
  let fixture: ComponentFixture<AltKisimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltKisimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltKisimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

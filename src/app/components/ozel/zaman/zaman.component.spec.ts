import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZamanComponent } from './zaman.component';

describe('ZamanComponent', () => {
  let component: ZamanComponent;
  let fixture: ComponentFixture<ZamanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZamanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZamanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

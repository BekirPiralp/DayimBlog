import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SosyalMedyaLogoComponent } from './sosyal-medya-logo.component';

describe('SosyalMedyaLogoComponent', () => {
  let component: SosyalMedyaLogoComponent;
  let fixture: ComponentFixture<SosyalMedyaLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SosyalMedyaLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SosyalMedyaLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

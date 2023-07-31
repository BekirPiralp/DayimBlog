import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcerikKartComponent } from './icerik-kart.component';

describe('IcerikKartComponent', () => {
  let component: IcerikKartComponent;
  let fixture: ComponentFixture<IcerikKartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcerikKartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IcerikKartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

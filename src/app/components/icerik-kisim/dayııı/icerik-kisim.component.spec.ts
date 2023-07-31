import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcerikKisimComponent } from './icerik-kisim.component';

describe('IcerikKisimComponent', () => {
  let component: IcerikKisimComponent;
  let fixture: ComponentFixture<IcerikKisimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcerikKisimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IcerikKisimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

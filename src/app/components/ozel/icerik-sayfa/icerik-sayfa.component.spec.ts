import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcerikSayfaComponent } from './icerik-sayfa.component';

describe('IcerikSayfaComponent', () => {
  let component: IcerikSayfaComponent;
  let fixture: ComponentFixture<IcerikSayfaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IcerikSayfaComponent]
    });
    fixture = TestBed.createComponent(IcerikSayfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

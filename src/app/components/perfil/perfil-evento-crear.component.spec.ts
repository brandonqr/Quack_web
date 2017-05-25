import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilEventoCrearComponent } from './perfil-evento-crear.component';

describe('PerfilEventoCrearComponent', () => {
  let component: PerfilEventoCrearComponent;
  let fixture: ComponentFixture<PerfilEventoCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilEventoCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilEventoCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

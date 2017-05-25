import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilEventoEliminarComponent } from './perfil-evento-eliminar.component';

describe('PerfilEventoEliminarComponent', () => {
  let component: PerfilEventoEliminarComponent;
  let fixture: ComponentFixture<PerfilEventoEliminarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilEventoEliminarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilEventoEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

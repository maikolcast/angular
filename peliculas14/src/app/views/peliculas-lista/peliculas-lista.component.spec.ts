import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasListaComponent } from './peliculas-lista.component';

describe('PeliculasListaComponent', () => {
  let component: PeliculasListaComponent;
  let fixture: ComponentFixture<PeliculasListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculasListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeliculasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

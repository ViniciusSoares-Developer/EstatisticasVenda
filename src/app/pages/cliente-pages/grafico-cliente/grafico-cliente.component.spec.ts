import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoClienteComponent } from './grafico-cliente.component';

describe('GraficoClienteComponent', () => {
  let component: GraficoClienteComponent;
  let fixture: ComponentFixture<GraficoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

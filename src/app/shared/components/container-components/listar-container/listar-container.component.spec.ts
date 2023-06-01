import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarContainerComponent } from './listar-container.component';

describe('ListarContainerComponent', () => {
  let component: ListarContainerComponent;
  let fixture: ComponentFixture<ListarContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
